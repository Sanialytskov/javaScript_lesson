import calc from './getMinSquaredNumber.js';

it('should return null if input is not a string', () => {
    expect(calc(5)).toBeNull();
    expect(calc(null)).toBeNull();
    expect(calc(['3 + 2'])).toBeNull();
});

it('should return the squere', () => {
    const result = calc('6 + 6');
    expect(result).toBe('6 + 6 = 12');
});

it('should return the squere', () => {
    const result = calc('6 / 6');
    expect(result).toBe('6 / 6 = 1');
});

it('should return the squere', () => {
    const result = calc('6 * 6');
    expect(result).toBe('6 * 6 = 36');
});

it('should return the squere', () => {
    const result = calc('6 - 6');
    expect(result).toBe('6 - 6 = 0');
});