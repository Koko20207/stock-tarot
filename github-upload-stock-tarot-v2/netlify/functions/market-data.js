const YAHOO_CHART_URL = "https://query1.finance.yahoo.com/v8/finance/chart";

function toYahooSymbol(symbol, suffix = "TW") {
  return `${symbol}.${suffix}`;
}

function round(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return null;
  }

  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function lastFinite(values) {
  for (let index = values.length - 1; index >= 0; index -= 1) {
    if (Number.isFinite(values[index])) {
      return values[index];
    }
  }

  return null;
}

function takeLastFinite(values, count, skipLast = 0) {
  const selected = [];

  for (let index = values.length - 1 - skipLast; index >= 0 && selected.length < count; index -= 1) {
    if (Number.isFinite(values[index])) {
      selected.unshift(values[index]);
    }
  }

  return selected;
}

function average(values) {
  if (!values.length) {
    return null;
  }

  const total = values.reduce((sum, value) => sum + value, 0);
  return total / values.length;
}

function getSma(values, period, skipLast = 0) {
  const sample = takeLastFinite(values, period, skipLast);
  if (sample.length < period) {
    return null;
  }

  return average(sample);
}

function getSignal({ aboveMa20, aboveMa60, bullishStack, changePct, volumeRatio20, distanceTo20dHigh }) {
  if (distanceTo20dHigh >= -1.2 && volumeRatio20 >= 1.25) {
    return "breakout";
  }

  if (changePct > 4.5 || volumeRatio20 >= 1.8) {
    return "hot";
  }

  if (aboveMa20 && aboveMa60 && bullishStack) {
    return "strong";
  }

  return "watch";
}

function getDynamicScore({
  aboveMa20,
  aboveMa60,
  aboveMa120,
  bullishStack,
  ma20Up,
  ma60Up,
  changePct,
  momentum20d,
  distanceTo20dHigh,
  volumeRatio20,
}) {
  let score = 58;

  if (aboveMa20) score += 8;
  if (aboveMa60) score += 6;
  if (aboveMa120) score += 6;
  if (bullishStack) score += 8;
  if (ma20Up) score += 4;
  if (ma60Up) score += 4;
  if (distanceTo20dHigh >= -1.2) score += 6;
  if (volumeRatio20 >= 1.2) score += 4;
  if (volumeRatio20 >= 1.8) score += 3;
  if (changePct > 0) score += Math.min(6, changePct);
  if (momentum20d > 0) score += Math.min(8, momentum20d * 0.6);
  if (!aboveMa20) score -= 6;
  if (distanceTo20dHigh < -12) score -= 5;

  return Math.max(40, Math.min(96, Math.round(score)));
}

async function fetchSymbolWithSuffix(symbol, suffix) {
  const yahooSymbol = toYahooSymbol(symbol, suffix);
  const response = await fetch(`${YAHOO_CHART_URL}/${yahooSymbol}?range=18mo&interval=1d`, {
    headers: {
      "User-Agent": "Mozilla/5.0 StockFishingApp/2.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Yahoo request failed for ${yahooSymbol}: ${response.status}`);
  }

  const payload = await response.json();
  const result = payload.chart?.result?.[0];

  if (!result) {
    throw new Error(`No chart result for ${yahooSymbol}`);
  }

  const quote = result.indicators?.quote?.[0] || {};
  const closes = quote.close || [];
  const volumes = quote.volume || [];
  const meta = result.meta || {};
  const price = meta.regularMarketPrice || lastFinite(closes);
  const previousClose = meta.previousClose || lastFinite(closes.slice(0, -1));
  const volume = lastFinite(volumes);
  const close20Ago = takeLastFinite(closes, 21)[0] || price;
  const high20 = Math.max(...takeLastFinite(closes, 20));
  const low20 = Math.min(...takeLastFinite(closes, 20));
  const high60 = Math.max(...takeLastFinite(closes, 60));
  const avgVolume20 = average(takeLastFinite(volumes, 20));
  const ma5 = getSma(closes, 5);
  const ma20 = getSma(closes, 20);
  const ma60 = getSma(closes, 60);
  const ma120 = getSma(closes, 120);
  const ma240 = getSma(closes, 240);
  const prevMa20 = getSma(closes, 20, 1);
  const prevMa60 = getSma(closes, 60, 1);
  const min5Close = Math.min(...takeLastFinite(closes, 5));
  const change = price - previousClose;
  const changePct = previousClose ? (change / previousClose) * 100 : 0;
  const momentum20d = close20Ago ? ((price - close20Ago) / close20Ago) * 100 : 0;
  const distanceTo20dHigh = high20 ? ((price - high20) / high20) * 100 : 0;
  const distanceTo60dHigh = high60 ? ((price - high60) / high60) * 100 : 0;
  const reboundFrom20dLow = low20 ? ((price - low20) / low20) * 100 : 0;
  const volumeRatio20 = avgVolume20 ? volume / avgVolume20 : 0;
  const aboveMa20 = Number.isFinite(ma20) && price >= ma20;
  const aboveMa60 = Number.isFinite(ma60) && price >= ma60;
  const aboveMa120 = Number.isFinite(ma120) && price >= ma120;
  const bullishStack =
    Number.isFinite(ma5) &&
    Number.isFinite(ma20) &&
    Number.isFinite(ma60) &&
    Number.isFinite(ma120) &&
    ma5 > ma20 &&
    ma20 > ma60 &&
    ma60 > ma120;
  const ma20Up = Number.isFinite(ma20) && Number.isFinite(prevMa20) && ma20 > prevMa20;
  const ma60Up = Number.isFinite(ma60) && Number.isFinite(prevMa60) && ma60 > prevMa60;
  const signal = getSignal({
    aboveMa20,
    aboveMa60,
    bullishStack,
    changePct,
    volumeRatio20,
    distanceTo20dHigh,
  });

  return {
    symbol,
    yahooSymbol,
    price: round(price),
    change: round(change),
    changePct: round(changePct),
    volume: round(volume, 0),
    avgVolume20: round(avgVolume20, 0),
    volumeRatio20: round(volumeRatio20),
    momentum20d: round(momentum20d),
    distanceTo20dHigh: round(distanceTo20dHigh),
    distanceTo60dHigh: round(distanceTo60dHigh),
    reboundFrom20dLow: round(reboundFrom20dLow),
    high20: round(high20),
    high60: round(high60),
    low20: round(low20),
    min5Close: round(min5Close),
    ma5: round(ma5),
    ma20: round(ma20),
    ma60: round(ma60),
    ma120: round(ma120),
    ma240: round(ma240),
    prevMa20: round(prevMa20),
    prevMa60: round(prevMa60),
    signal,
    score: getDynamicScore({
      aboveMa20,
      aboveMa60,
      aboveMa120,
      bullishStack,
      ma20Up,
      ma60Up,
      changePct,
      momentum20d,
      distanceTo20dHigh,
      volumeRatio20,
    }),
    updatedAt: new Date().toISOString(),
  };
}

async function fetchSymbol(symbol) {
  const errors = [];
  for (const suffix of ["TW", "TWO"]) {
    try {
      return await fetchSymbolWithSuffix(symbol, suffix);
    } catch (error) {
      errors.push(error.message);
    }
  }

  throw new Error(errors.join(" / "));
}

exports.handler = async (event) => {
  const rawSymbols = event.queryStringParameters?.symbols || "";
  const symbols = [...new Set(rawSymbols.split(",").map((symbol) => symbol.trim()).filter(Boolean))]
    .slice(0, 90);

  if (!symbols.length) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Missing symbols query parameter" }),
    };
  }

  const entries = await Promise.allSettled(symbols.map(fetchSymbol));
  const data = {};
  const errors = [];

  entries.forEach((entry, index) => {
    const symbol = symbols[index];
    if (entry.status === "fulfilled") {
      data[symbol] = entry.value;
    } else {
      errors.push({ symbol, message: entry.reason.message });
    }
  });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      source: "Yahoo Finance chart API via Netlify Function",
      updatedAt: new Date().toISOString(),
      data,
      errors,
    }),
  };
};
