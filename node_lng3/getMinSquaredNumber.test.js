import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should return null for an empty array', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toBeNull();
});

it('should return null if input is a string', () => {
    const result = getMinSquaredNumber('hello');
    expect(result).toBeNull();
});

it('should return the squere', () => {
    const result = getMinSquaredNumber([-4, -2, 7, 1, 9]);
    expect(result).toBe(1);
});