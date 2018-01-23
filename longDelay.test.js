const longDelay = require('./longDelay');


describe('Valid inputs', () => {
  test('The function is called two times, one time with argument as 2 and other one with no argument and return 2', () => {
    expect(longDelay(2)()).toBe(2);
  });
});
