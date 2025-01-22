import { reverseArray } from './reverseArray';

it('should reverse an array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});

it('should return null if input is not an array', () => {
    expect(reverseArray(123)).toBeNull();
    expect(reverseArray('hello')).toBeNull();
    expect(reverseArray({ a: 1 })).toBeNull();
});

it('should return an empty array if input is an empty array', () => {
    expect(reverseArray([])).toEqual([]);
});