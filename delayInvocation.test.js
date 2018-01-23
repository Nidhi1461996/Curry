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
