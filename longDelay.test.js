const longDelay = require('./longDelay');

describe('teasting for currying functions', () => {
  test('with one function call', () =>{
    expect(longDelay(2)()).toBe(2);
  });
  test('with two calls', () =>{
    expect(longDelay(2)(3)()).toBe(5);
  });

  test('with one negative number', () =>{
    expect(longDelay(-2)()).toBe(-2);
  });

  test('with two negative numbers', () =>{
    expect(longDelay(-2)(-3)()).toBe(-5);
  });

});
