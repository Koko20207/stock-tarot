const fs = require("node:fs/promises");
const path = require("node:path");
const { handler } = require("../netlify/functions/market-scan.js");

const TWSE_QUOTES_URL = "https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL";
const TPEX_QUOTES_URL = "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_quotes";

function toNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value !== "string") return null;
  const parsed = Number(value.replace(/,/g, "").replace(/--/g, "").trim());
  return Number.isFinite(parsed) ? parsed : null;
}

function field(row, names) {
  for (const name of names) {
    if (row?.[name] !== undefined && row[name] !== null && row[name] !== "") return row[name];
  }
  return null;
}

function round(value, digits = 2) {
  if (!Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function isEtf(symbol, name) {
  return /^00\d{2,4}$/.test(symbol) || /(ETF|指數股票型基金|高股息|台灣50|高息|低波)/i.test(name);
}

function isTradable(symbol, name) {
  if (!/^\d{4,6}$/.test(symbol)) return false;
  if (isEtf(symbol, name)) return true;
  if (!/^\d{4}$/.test(symbol)) return false;
  return !/(ETN|指數|基金|受益|購|售|牛|熊|權證|特別股|KY)/i.test(name);
}

function normalizePublicQuote(row, source) {
  const isTwse = source === "twse";
  const symbol = String(field(row, isTwse ? ["Code", "證券代號", "code"] : ["SecuritiesCompanyCode", "Code", "代號", "股票代號"]) || "").trim();
  const name = String(field(row, isTwse ? ["Name", "證券名稱", "name"] : ["CompanyName", "Name", "名稱", "股票名稱"]) || "").trim();
  const price = toNumber(field(row, isTwse ? ["ClosingPrice", "收盤價", "收盤"] : ["Close", "ClosingPrice", "收盤", "收盤價"]));
  const change = toNumber(field(row, isTwse ? ["Change", "漲跌價差", "漲跌"] : ["Change", "漲跌", "漲跌價差"]));
  const volume = toNumber(field(row, isTwse ? ["TradeVolume", "成交股數"] : ["TradingShares", "TradeVolume", "成交股數", "成交仟股"]));
  const value = toNumber(field(row, isTwse ? ["TradeValue", "成交金額"] : ["TransactionAmount", "TradeValue", "成交金額"]));
  if (!isTradable(symbol, name) || !Number.isFinite(price) || price <= 0) return null;
  const safeChange = Number.isFinite(change) ? change : 0;
  const previousClose = price - safeChange;
  const changePct = previousClose ? (safeChange / previousClose) * 100 : 0;
  return { symbol, name, source, price, change: safeChange, changePct, volume, value };
}

function inferTheme(name, symbol) {
  if (isEtf(symbol, name)) return ["etf", "ETF"];
  if (/(光通訊|光電|光學|鏡頭|光模組|光纖|光環|聯鈞|華星光|波若威|上詮|聯亞|大立光|玉晶光|先進光|亞光|億光|富采)/.test(name)) return ["optical", "光通訊 / 光電"];
  if (/(緯|廣達|鴻海|英業達|仁寶|伺服|電腦|資訊|光寶|佳世達)/.test(name)) return ["ai", "AI / 電子代工"];
  if (/(電|燿|興|欣|華通|健鼎|金像|PCB|材料|銅箔|載板)/i.test(name)) return ["pcb", "PCB / 材料"];
  if (/(積|聯發|矽|創意|世芯|晶|半導|精測|旺宏)/.test(name)) return ["foundry", "半導體"];
  if (/(散熱|奇鋐|雙鴻|台達|電源|風扇|熱)/.test(name)) return ["power", "電源 / 散熱"];
  if (/(記憶|威剛|華邦|南亞科|群聯|十銓|晶豪)/.test(name)) return ["memory", "記憶體 / 儲存"];
  return ["quiet", "默默轉強"];
}

function makePublicCard(quote) {
  const [theme, themeLabel] = inferTheme(quote.name, quote.symbol);
  const etf = theme === "etf";
  const value = quote.value || quote.price * (quote.volume || 0);
  let score = etf ? 68 : 58;
  if (quote.changePct > 0) score += Math.min(16, quote.changePct * 4);
  if (quote.changePct < 0) score += Math.max(-12, quote.changePct * 3);
  if (Number.isFinite(value) && value > 20_000_000) score += 6;
  if (Number.isFinite(value) && value > 500_000_000) score += 4;
  if (quote.changePct > 5.5) score -= 8;
  score = Math.max(42, Math.min(92, Math.round(score)));
  const heat = quote.changePct >= 4.5 ? "hot" : quote.changePct >= 2.2 ? "breakout" : quote.changePct >= 0.4 ? "strong" : "watch";
  const marketLabel = quote.source === "tpex" ? "上櫃" : "上市";

  return {
    ticker: quote.symbol,
    name: quote.name,
    theme,
    themeLabel: `${themeLabel} / ${marketLabel}`,
    horizon: etf ? "1-3m" : "1-4w",
    risk: etf ? "low" : score >= 76 ? "medium" : "high",
    riskLabel: etf ? "低風險" : score >= 76 ? "中等" : "積極",
    score,
    heat,
    heatLabel: heat === "hot" ? "火熱牌" : heat === "breakout" ? "突破牌" : heat === "strong" ? "轉強牌" : "觀察牌",
    summary: `${quote.name} 使用交易所公開盤後資料產生，適合先觀察價格與漲跌。`,
    reason: "GitHub Pages 靜態版使用公開盤後資料，先確保價格是真實收盤價，再等待完整均線快取更新。",
    catalyst: "盤後收盤價、漲跌幅、成交金額與族群輪動。",
    entry: "公開盤後資料不是逐筆即時報價，買賣前仍要用券商報價確認。",
    riskNote: "若完整均線快取尚未更新，請把這張牌當作初步觀察，不當作直接買賣訊號。",
    tags: [marketLabel, "公開盤後", themeLabel],
    size: score >= 82 ? "m" : "s",
    hot: heat === "hot",
    market: {
      symbol: quote.symbol,
      price: round(quote.price),
      change: round(quote.change),
      changePct: round(quote.changePct),
      volume: round(quote.volume, 0),
      value: round(value, 0),
      volumeRatio20: null,
      momentum20d: round(quote.changePct),
      distanceTo20dHigh: null,
      distanceTo60dHigh: null,
      distanceTo120dHigh: null,
      distanceTo240dHigh: null,
      reboundFrom20dLow: null,
      high20: null,
      high60: null,
      high120: null,
      high240: null,
      low20: null,
      min5Close: null,
      ma5: null,
      ma20: null,
      ma60: null,
      ma120: null,
      ma240: null,
      prevMa20: null,
      prevMa60: null,
      signal: heat,
      score,
      updatedAt: new Date().toISOString(),
    },
  };
}

async function buildPublicFallback(limit = 72) {
  const [twse, tpex] = await Promise.all([
    fetch(TWSE_QUOTES_URL).then((response) => response.json()),
    fetch(TPEX_QUOTES_URL).then((response) => response.json()),
  ]);
  const quotes = [
    ...twse.map((row) => normalizePublicQuote(row, "twse")).filter(Boolean),
    ...tpex.map((row) => normalizePublicQuote(row, "tpex")).filter(Boolean),
  ];
  const stocks = quotes
    .map(makePublicCard)
    .sort((left, right) => right.score - left.score || (right.market.value || 0) - (left.market.value || 0))
    .slice(0, limit);
  return {
    source: "TWSE/TPEx public closing quotes",
    mode: "github-pages-public-fallback",
    updatedAt: new Date().toISOString(),
    universeCount: quotes.length,
    stocks,
    errors: [],
  };
}

async function main() {
  const outputPath = path.resolve(process.argv[2] || "market-cache.json");
  let payload;

  try {
    const response = await handler({
      queryStringParameters: {
        limit: "72",
        candidates: "180",
      },
    });

    if (response.statusCode !== 200) {
      throw new Error(`Market scan failed with status ${response.statusCode}: ${response.body}`);
    }

    payload = JSON.parse(response.body);
    if (!payload.stocks?.length) {
      throw new Error("Full market scan returned no stocks");
    }
  } catch (error) {
    console.warn(`Full scan unavailable, using public fallback: ${error.message}`);
    payload = await buildPublicFallback(72);
  }

  payload.generatedBy = "github-actions-market-cache";
  payload.generatedAt = new Date().toISOString();

  await fs.writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Market cache written to ${outputPath}`);
  console.log(`Stocks: ${payload.stocks?.length || 0}, universe: ${payload.universeCount || 0}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
