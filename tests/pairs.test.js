// tests/pairs.test.js
const { classifyPair, REAL_PAIRS, OTC_PAIRS } = require('../lib/logic');

test('real pairs are classified as REAL', () => {
  REAL_PAIRS.forEach(p => expect(classifyPair(p)).toBe('REAL'));
});

test('otc pairs are classified as OTC', () => {
  OTC_PAIRS.forEach(p => expect(classifyPair(p)).toBe('OTC'));
});

test('unknown pair is UNKNOWN', () => {
  expect(classifyPair('XAU/USD')).toBe('UNKNOWN');
});
