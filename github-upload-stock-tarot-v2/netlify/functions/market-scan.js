const YAHOO_CHART_URL = "https://query1.finance.yahoo.com/v8/finance/chart";
const TWSE_QUOTES_URL = "https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL";
const TPEX_QUOTES_URL = "https://www.tpex.org.tw/openapi/v1/tpex_mainboard_quotes";

const MARKET_LABELS = {
  twse: "上市",
  tpex: "上櫃",
};

function round(value, digits = 2) {
  if (!Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function toNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value !== "string") return null;
  const normalized = value.replace(/,/g, "").replace(/--/g, "").trim();
  if (!normalized) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function getField(row, names) {
  for (const name of names) {
    if (row[name] !== undefined && row[name] !== null && row[name] !== "") return row[name];
  }
  return null;
}

function isEtfQuote(symbol, name) {
  return /^00\d{2,4}$/.test(symbol) || /(ETF|指數股票型基金|高股息|台灣50|高息|低波)/i.test(name);
}

function isTradableQuote(symbol, name) {
  if (!/^\d{4,6}$/.test(symbol)) return false;
  if (isEtfQuote(symbol, name)) return true;
  if (!/^\d{4}$/.test(symbol)) return false;
  return !/(ETN|指數|基金|受益|購|售|牛|熊|權證|特別股|KY)/i.test(name);
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 StockFishingApp/3.0",
      Accept: "application/json,text/plain,*/*",
    },
  });

  if (!response.ok) throw new Error(`Request failed ${response.status}: ${url}`);
  return response.json();
}

function normalizeTwseQuote(row) {
  const symbol = String(getField(row, ["Code", "證券代號", "code"]) || "").trim();
  const name = String(getField(row, ["Name", "證券名稱", "name"]) || "").trim();
  const price = toNumber(getField(row, ["ClosingPrice", "收盤價", "收盤"]));
  const change = toNumber(getField(row, ["Change", "漲跌價差", "漲跌"]));
  const volume = toNumber(getField(row, ["TradeVolume", "成交股數"]));
  const value = toNumber(getField(row, ["TradeValue", "成交金額"]));

  if (!isTradableQuote(symbol, name) || !Number.isFinite(price) || price <= 0) return null;
  return { symbol, name, market: "twse", assetType: isEtfQuote(symbol, name) ? "etf" : "stock", price, change, volume, value, yahooSuffix: "TW" };
}

function normalizeTpexQuote(row) {
  const symbol = String(getField(row, ["SecuritiesCompanyCode", "Code", "代號", "股票代號"]) || "").trim();
  const name = String(getField(row, ["CompanyName", "Name", "名稱", "股票名稱"]) || "").trim();
  const price = toNumber(getField(row, ["Close", "ClosingPrice", "收盤", "收盤價"]));
  const change = toNumber(getField(row, ["Change", "漲跌", "漲跌價差"]));
  const volume = toNumber(getField(row, ["TradingShares", "TradeVolume", "成交股數", "成交仟股"]));
  const value = toNumber(getField(row, ["TransactionAmount", "TradeValue", "成交金額"]));

  if (!isTradableQuote(symbol, name) || !Number.isFinite(price) || price <= 0) return null;
  return { symbol, name, market: "tpex", assetType: isEtfQuote(symbol, name) ? "etf" : "stock", price, change, volume, value, yahooSuffix: "TWO" };
}

async function fetchUniverse() {
  const [twseResult, tpexResult] = await Promise.allSettled([
    fetchJson(TWSE_QUOTES_URL),
    fetchJson(TPEX_QUOTES_URL),
  ]);
  const rows = [];
  const errors = [];

  if (twseResult.status === "fulfilled") {
    rows.push(...twseResult.value.map(normalizeTwseQuote).filter(Boolean));
  } else {
    errors.push({ source: "twse", message: twseResult.reason.message });
  }

  if (tpexResult.status === "fulfilled") {
    rows.push(...tpexResult.value.map(normalizeTpexQuote).filter(Boolean));
  } else {
    errors.push({ source: "tpex", message: tpexResult.reason.message });
  }

  return { rows, errors };
}

function takeLastFinite(values, count, skipLast = 0) {
  const selected = [];
  for (let index = values.length - 1 - skipLast; index >= 0 && selected.length < count; index -= 1) {
    if (Number.isFinite(values[index])) selected.unshift(values[index]);
  }
  return selected;
}

function average(values) {
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getSma(values, period, skipLast = 0) {
  const sample = takeLastFinite(values, period, skipLast);
  if (sample.length < period) return null;
  return average(sample);
}

function inferTheme(name, symbol = "") {
  if (isEtfQuote(symbol, name)) return ["etf", "ETF"];
  if (/(光通訊|光電|光學|鏡頭|光模組|光纖|光環|聯鈞|華星光|波若威|上詮|聯亞|大立光|玉晶光|先進光|亞光|億光|富采)/.test(name)) {
    return ["optical", "光通訊 / 光電"];
  }
  if (/(緯|廣達|鴻海|英業達|仁寶|伺服|電腦|資訊|光寶|佳世達)/.test(name)) return ["ai", "AI / 電子代工"];
  if (/(電|燿|興|欣|華通|健鼎|金像|PCB|材料|銅箔|載板)/i.test(name)) return ["pcb", "PCB / 材料"];
  if (/(積|聯發|矽|創意|世芯|晶|半導|精測|旺宏)/.test(name)) return ["foundry", "半導體"];
  if (/(散熱|奇鋐|雙鴻|台達|電源|風扇|熱)/.test(name)) return ["power", "電源 / 散熱"];
  if (/(記憶|威剛|華邦|南亞科|群聯|十銓|晶豪)/.test(name)) return ["memory", "記憶體 / 儲存"];
  return ["quiet", "默默轉強"];
}

function getQuietScore(data) {
  let score = 45;
  if (data.aboveMa20) score += 10;
  if (data.aboveMa60) score += 8;
  if (data.ma20Up) score += 8;
  if (data.ma60Up) score += 6;
  if (data.momentum20d > 4 && data.momentum20d < 18) score += 14;
  if (data.momentum60d > 8 && data.momentum60d < 35) score += 9;
  if (data.distanceTo20dHigh > -8 && data.distanceTo20dHigh < -0.5) score += 8;
  if (data.volumeRatio20 > 0.85 && data.volumeRatio20 < 1.8) score += 10;
  if (data.changePct > -1.5 && data.changePct < 3.5) score += 8;
  if (Number.isFinite(data.value) && data.value > 15_000_000 && data.value < 1_200_000_000) score += 6;
  if (data.changePct > 5 || data.volumeRatio20 > 2.4 || data.momentum20d > 28) score -= 18;
  return Math.max(40, Math.min(96, Math.round(score)));
}

function getHeat({ quietScore, changePct, volumeRatio20, distanceTo20dHigh }) {
  if (changePct > 4.2 || volumeRatio20 > 2.2) return ["hot", "火熱魚"];
  if (distanceTo20dHigh >= -2 && volumeRatio20 >= 1.15) return ["breakout", "突破魚"];
  if (quietScore >= 76) return ["strong", "大尾魚"];
  return ["watch", "觀察魚"];
}

async function fetchChart(quote) {
  const yahooSymbol = `${quote.symbol}.${quote.yahooSuffix}`;
  const response = await fetch(`${YAHOO_CHART_URL}/${yahooSymbol}?range=18mo&interval=1d`, {
    headers: { "User-Agent": "Mozilla/5.0 StockFishingApp/3.0" },
  });
  if (!response.ok) throw new Error(`Yahoo request failed for ${yahooSymbol}: ${response.status}`);

  const payload = await response.json();
  const result = payload.chart?.result?.[0];
  const chartQuote = result?.indicators?.quote?.[0] || {};
  const closes = chartQuote.close || [];
  const volumes = chartQuote.volume || [];
  const price = result?.meta?.regularMarketPrice || quote.price;
  const previousClose = result?.meta?.previousClose || takeLastFinite(closes, 2)[0] || price;
  const volume = takeLastFinite(volumes, 1)[0] || quote.volume || 0;
  const close20Ago = takeLastFinite(closes, 21)[0] || price;
  const close60Ago = takeLastFinite(closes, 61)[0] || price;
  const high20 = Math.max(...takeLastFinite(closes, 20));
  const low20 = Math.min(...takeLastFinite(closes, 20));
  const avgVolume20 = average(takeLastFinite(volumes, 20)) || 0;
  const ma5 = getSma(closes, 5);
  const ma20 = getSma(closes, 20);
  const ma60 = getSma(closes, 60);
  const ma120 = getSma(closes, 120);
  const ma240 = getSma(closes, 240);
  const prevMa20 = getSma(closes, 20, 1);
  const prevMa60 = getSma(closes, 60, 1);
  const change = price - previousClose;
  const changePct = previousClose ? (change / previousClose) * 100 : 0;
  const momentum20d = close20Ago ? ((price - close20Ago) / close20Ago) * 100 : 0;
  const momentum60d = close60Ago ? ((price - close60Ago) / close60Ago) * 100 : 0;
  const distanceTo20dHigh = high20 ? ((price - high20) / high20) * 100 : 0;
  const reboundFrom20dLow = low20 ? ((price - low20) / low20) * 100 : 0;
  const volumeRatio20 = avgVolume20 ? volume / avgVolume20 : 0;
  const aboveMa20 = Number.isFinite(ma20) && price >= ma20;
  const aboveMa60 = Number.isFinite(ma60) && price >= ma60;
  const ma20Up = Number.isFinite(ma20) && Number.isFinite(prevMa20) && ma20 > prevMa20;
  const ma60Up = Number.isFinite(ma60) && Number.isFinite(prevMa60) && ma60 > prevMa60;
  const quietScore = getQuietScore({
    aboveMa20,
    aboveMa60,
    ma20Up,
    ma60Up,
    changePct,
    momentum20d,
    momentum60d,
    distanceTo20dHigh,
    volumeRatio20,
    value: quote.value,
  });
  const [heat, heatLabel] = getHeat({ quietScore, changePct, volumeRatio20, distanceTo20dHigh });
  const [theme, themeLabel] = inferTheme(quote.name, quote.symbol);
  const isEtf = quote.assetType === "etf" || theme === "etf";

  return {
    ticker: quote.symbol,
    name: quote.name,
    theme,
    themeLabel: `${themeLabel} / ${MARKET_LABELS[quote.market]}`,
    horizon: isEtf ? "1-3m" : "1-4w",
    risk: isEtf ? "low" : quietScore >= 82 ? "medium" : "high",
    riskLabel: isEtf ? "低風險" : quietScore >= 82 ? "中等" : "積極",
    score: quietScore,
    heat,
    heatLabel,
    summary: isEtf
      ? `全市場掃描選出：ETF，近 20 日動能 ${round(momentum20d)}%，量比 ${round(volumeRatio20)}x。`
      : `全市場掃描選出：${MARKET_LABELS[quote.market]}股票，近 20 日動能 ${round(momentum20d)}%，量比 ${round(volumeRatio20)}x。`,
    reason: isEtf
      ? "ETF 適合用來觀察整體族群或指數方向，重點是均線趨勢與資金是否穩定流入。"
      : "股價站上關鍵均線、月線或季線逐步翻揚，漲幅尚未過熱，屬於市場可能還沒完全注意到的緩漲型標的。",
    catalyst: isEtf
      ? "後續可觀察成分股表現、配息或指數資金流向，以及是否穩定沿月線墊高。"
      : "後續可觀察是否維持量增不爆量、沿 20 日線或 60 日線墊高，以及族群是否開始擴散。",
    entry: isEtf
      ? "ETF 較適合分批與回測均線觀察，不需要用追高方式操作。"
      : "避免追單日急漲，較適合等回測月線不破或突破後量縮整理再觀察。",
    riskNote: isEtf
      ? "ETF 仍會受大盤與成分股影響，若跌破季線也要降低短線期待。"
      : "若跌破月線且量能放大，代表默默墊高的節奏被破壞，應先移出觀察池。",
    tags: isEtf ? ["ETF", "全市場掃描", "分批觀察"] : [MARKET_LABELS[quote.market], "全市場掃描", "默默轉強"],
    size: quietScore >= 84 ? "m" : "s",
    hot: heat === "hot",
    market: {
      symbol: quote.symbol,
      yahooSymbol,
      price: round(price),
      change: round(change),
      changePct: round(changePct),
      volume: round(volume, 0),
      avgVolume20: round(avgVolume20, 0),
      volumeRatio20: round(volumeRatio20),
      momentum20d: round(momentum20d),
      momentum60d: round(momentum60d),
      distanceTo20dHigh: round(distanceTo20dHigh),
      reboundFrom20dLow: round(reboundFrom20dLow),
      high20: round(high20),
      low20: round(low20),
      min5Close: round(Math.min(...takeLastFinite(closes, 5))),
      ma5: round(ma5),
      ma20: round(ma20),
      ma60: round(ma60),
      ma120: round(ma120),
      ma240: round(ma240),
      prevMa20: round(prevMa20),
      prevMa60: round(prevMa60),
      signal: heat,
      score: quietScore,
      quietScore,
      updatedAt: new Date().toISOString(),
    },
  };
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = [];
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      try {
        results[index] = { status: "fulfilled", value: await mapper(items[index]) };
      } catch (error) {
        results[index] = { status: "rejected", reason: error };
      }
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

exports.handler = async (event) => {
  const limit = Math.max(10, Math.min(80, Number(event.queryStringParameters?.limit) || 40));
  const candidateLimit = Math.max(40, Math.min(180, Number(event.queryStringParameters?.candidates) || 120));
  const { rows, errors } = await fetchUniverse();
  const candidates = rows
    .filter((quote) => {
      const changePct = quote.price && Number.isFinite(quote.change) ? (quote.change / (quote.price - quote.change)) * 100 : 0;
      const value = quote.value || quote.price * (quote.volume || 0);
      return Number.isFinite(value) && value >= 8_000_000 && value <= 1_800_000_000 && changePct > -4 && changePct < 5.5;
    })
    .sort((left, right) => {
      const leftValue = left.value || left.price * (left.volume || 0);
      const rightValue = right.value || right.price * (right.volume || 0);
      return rightValue - leftValue;
    })
    .slice(0, candidateLimit);

  const scanned = await mapWithConcurrency(candidates, 8, fetchChart);
  const scanErrors = [];
  const stocks = scanned
    .map((entry, index) => {
      if (entry.status === "fulfilled") return entry.value;
      scanErrors.push({ symbol: candidates[index]?.symbol, message: entry.reason.message });
      return null;
    })
    .filter(Boolean)
    .filter((stock) => stock.score >= 68)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      source: "TWSE/TPEx open data + Yahoo Finance chart scan",
      mode: "full-market-quiet-risers",
      excluded: "emerging stocks are excluded; TWSE listed, TPEx mainboard, and ETF quotes are scanned",
      updatedAt: new Date().toISOString(),
      universeCount: rows.length,
      candidateCount: candidates.length,
      stocks,
      errors: [...errors, ...scanErrors.slice(0, 12)],
    }),
  };
};
