// lib/logic.js
// Shared pure functions for MJ MIRAJ JUI AI used by tests and (optionally) by server-side code.

const REAL_PAIRS = [
  "EUR/JPY",
  "USD/JPY",
  "GBP/JPY",
  "EUR/USD",
  "GBP/USD"
];

const OTC_PAIRS = [
  "USD/NGN",
  "GBP/NZD",
  "USD/ARS",
  "USD/DZD",
  "USD/INR",
  "USD/BRL",
  "USD/BDT",
  "USD/COP",
  "USD/MXN",
  "USD/PKR"
];

function classifyPair(pair) {
  if (REAL_PAIRS.includes(pair)) return "REAL";
  if (OTC_PAIRS.includes(pair)) return "OTC";
  return "UNKNOWN";
}

function isValidOhlc(candle) {
  if (!candle || typeof candle !== 'object') return false;
  const { timestamp, open, high, low, close } = candle;
  if (typeof timestamp !== 'number' || !Number.isFinite(timestamp)) return false;
  if ([open, high, low, close].some(v => typeof v !== 'number' || !Number.isFinite(v))) return false;
  // Basic sanity: high should be >= max(open, close) and low <= min(open, close)
  if (high < Math.max(open, close)) return false;
  if (low > Math.min(open, close)) return false;
  return true;
}

function simulateCompounding(initialStake, payoutPercent, steps) {
  // Non-martingale simple compounding: stake remains fixed per step
  if (typeof initialStake !== 'number' || initialStake <= 0) throw new Error('invalid initialStake');
  if (typeof payoutPercent !== 'number' || payoutPercent <= 0) throw new Error('invalid payoutPercent');
  if (!Number.isInteger(steps) || steps < 1 || steps > 6) throw new Error('steps must be integer 1..6');

  let totalProfit = 0;
  for (let i = 0; i < steps; i++) {
    totalProfit += initialStake * (payoutPercent / 100);
  }
  return { initialStake, payoutPercent, steps, totalProfit };
}

module.exports = {
  REAL_PAIRS,
  OTC_PAIRS,
  classifyPair,
  isValidOhlc,
  simulateCompounding
};
