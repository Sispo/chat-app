const expect = require('expect');

var {isRealString} = require('./validation.js');

describe('Is Real String Validation', () => {
  it('should reject non-string values', () => {
    expect(isRealString(123)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('      ')).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    expect(isRealString('123')).toBe(true);
  });
});
