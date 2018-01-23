const identity = require('./identity');

describe('Valid inputs', () => {
  test('String inputs', () =>{
    expect(identity('Nidhi')).toBe('Nidhi');
  });
  test('Number input', () =>{
    expect(identity(100)).toBe(100);
  });

  test('No input', () => {
    expect(identity()).toBe(undefined);
  });
});

describe('Invalid inputs', () => {

  test('Input as undefined', () => {
    expect(identity(undefined)).toBe(undefined);
  });
  test('Input as Not a number', () => {
    expect(identity(NaN)).toBe(NaN);
  });

  test('check for the type returned', () => {
    expect(typeof identity('nidhi')).toBe('string');
  });

});
