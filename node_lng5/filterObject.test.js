import { getAdults } from './getAdults';

it('should return only adults (18+)', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should return an empty object if no adults are present', () => {
    const result = getAdults({ Alice: 15, Mark: 12 });
    expect(result).toEqual({});
});

it('should return the same object if all are adults', () => {
    const result = getAdults({ Ann: 56, Andrey: 25 });
    expect(result).toEqual({ Ann: 56, Andrey: 25 });
});