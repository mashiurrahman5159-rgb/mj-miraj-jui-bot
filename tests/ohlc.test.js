const { isValidOhlc } = require('../lib/logic');

test('isValidOhlc returns true for a well-formed candle', () => {
  const candle = { timestamp: Date.now(), open: 100, high: 110, low: 90, close: 105 };
  expect(isValidOhlc(candle)).toBe(true);
});

test('isValidOhlc returns false for missing fields', () => {
  const bad = { open: 100, high: 110 };
  expect(isValidOhlc(bad)).toBe(false);
});

test('isValidOhlc rejects non-numeric values', () => {
  const bad = { timestamp: Date.now(), open: "100", high: 110, low: 90, close: 105 };
  expect(isValidOhlc(bad)).toBe(false);
});
