const binary = require('./Binary');

describe('with valid inputs', () => {
  test('With positive numbers', () => {
    expect(binary(4,5)).toBe(9);
  });

  test('With negative numbers', () => {
    expect(binary(-4,-5)).toBe(-9);
  });

  test('With positive and negative numbers', () => {
    expect(binary(-4,5)).toBe(1);
  });
});
