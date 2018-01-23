const check = require('./delayInvocation');


describe('Valid inputs', () => {

  test('positive numbers as arguments', () =>{
    expect(check(1)(2)).toBe(3);
  });

  test('negative numbers as arguments', () =>{
    expect(check(-1)(-2)).toBe(-3);
  });

  test('With positive and negative numbers', () =>{
    expect(check(-1)(2)).toBe(1);
  });

});


describe('inValid inputs', () => {

  test('with undefined as inputOne', () =>{
    expect(check(undefined)(2)).toBe(null);
  });

  test('with undefined as inputTwo', () =>{
    expect(check(-1)(undefined)).toBe(null);
  });

  test('With both parameters as undefined', () =>{
    expect(check(undefined)(undefined)).toBe(null);
  });

});
