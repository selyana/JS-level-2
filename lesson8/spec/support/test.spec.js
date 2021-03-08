// почему не test.js? 
// error: cannot find module ../test
const test = require('../test');
const pow = test.pow;

describe('Функция pow()', () => {
  it('должна возвращать 9 при аргументах (3, 2)', () => {
    expect(pow(3, 2)).toBe(9);
  });

  it('должна возвращать null при аргументах (null, 2)', () => {
    expect(pow(null, 2)).toBeNull();
  })
});