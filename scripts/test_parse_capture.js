import process from "node:process";
import { parseCaptureLine } from "./parse_capture.js";

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}: expected "${expected}" but got "${actual}"`);
  }
}

const example = parseCaptureLine("股海釣魚 8046 南電 TW 今天放量站上月線");
assertEqual(example.ticker, "8046", "ticker");
assertEqual(example.name, "南電", "name");
assertEqual(example.market, "TW", "market");
assertEqual(example.reason, "今天放量站上月線", "reason");

const compact = parseCaptureLine("股海釣魚 TSLA US watch for breakout");
assertEqual(compact.ticker, "TSLA", "ticker 2");
assertEqual(compact.name, null, "name 2");
assertEqual(compact.market, "US", "market 2");
assertEqual(compact.reason, "watch for breakout", "reason 2");

process.stdout.write("parse_capture tests passed\n");
