const check = require('./delayInvocation');


describe('Valid inputs', () => {

  test('positive numbers as arguments', () =>{
    expect(check(1)(2)).toBe(3);
  });

  

});
