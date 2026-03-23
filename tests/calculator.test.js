const { add } = require('../src/calculator');
const { multiply } = require('../src/calculator');

test('adds numbers', () => {
    expect(add(2,3)).toBe(5);
});

test('multiply numbers', () => {
    expect(multiply(3,2)).toBe(6);
});