#!/usr/bin/env node

import process from "node:process";
import { pathToFileURL } from "node:url";

function normalizeWhitespace(text) {
  return text.replace(/\s+/g, " ").trim();
}

export function parseCaptureLine(input) {
  const text = normalizeWhitespace(input);
  const withoutPrefix = text.replace(/^股海釣魚\s*/u, "").trim();
  const parts = withoutPrefix.split(" ").filter(Boolean);

  const ticker = parts.find((part) => /^[0-9A-Z.-]{2,10}$/u.test(part)) ?? null;
  const market = parts.find((part) => /^(TW|US|HK|JP|UNKNOWN)$/iu.test(part)) ?? null;

  const tickerIndex = ticker ? parts.indexOf(ticker) : -1;
  const marketIndex = market ? parts.indexOf(market) : -1;

  let name = null;
  if (tickerIndex >= 0) {
    const start = tickerIndex + 1;
    const end = marketIndex >= start ? marketIndex : start + 1;
    const maybeName = parts.slice(start, end).join(" ").trim();
    name = maybeName || null;
  }

  const reasonStart = marketIndex >= 0 ? marketIndex + 1 : tickerIndex >= 0 ? tickerIndex + 1 : 0;
  const reasonParts = parts.slice(reasonStart).filter((part) => part !== name);
  const reason = reasonParts.join(" ").trim() || null;

  return {
    raw: input.trim(),
    ticker,
    name,
    market: market ? market.toUpperCase() : null,
    reason,
    capturedAt: new Date().toISOString()
  };
}

function printUsage() {
  process.stdout.write(
    [
      "Usage:",
      '  npm run parse:capture -- "股海釣魚 8046 南電 TW 今天放量站上月線"',
      "",
      "Output:",
      "  Prints structured JSON for the capture line."
    ].join("\n")
  );
}

const isDirectRun = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;

if (isDirectRun) {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("--help")) {
    printUsage();
    process.exit(args.length === 0 ? 1 : 0);
  }

  const input = args.join(" ");
  const result = parseCaptureLine(input);
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}
