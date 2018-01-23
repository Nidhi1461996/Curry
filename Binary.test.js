const binary = require('./Binary');


//valid parameters
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


//invalid parameters
describe('testing with invalid parameters', () => {

  test('With no input', () => {
    expect(binary()).toBe(undefined);
  });

  test('With one parameter as undefined', () => {
    expect(binary(undefined,5)).toBe(undefined);
  });

  test('With both parameters as undefined', () => {
    expect(binary(undefined,undefined)).toBe(undefined);
  });

  test('With NaN as a parameter', () => {
    expect(binary(NaN,5)).toBe(null);
  });

  test('With NaN as a parameter', () => {
    expect(binary(NaN,NaN)).toBe(null);
  });
});
