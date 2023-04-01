const maxNum = require('../max-num');

describe('maxNum', () => {
  it('returns the largest number in a given array', () => {
    const arr = [2, 3, -2, 99, 100, 5000, 321];
    const result = maxNum(arr);
    expect(result).toEqual(5000);
  });
});
