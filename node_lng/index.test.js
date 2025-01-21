it('17 и в африке 17', () => {
  expect(17).toEqual(17);
});

it('17 не в африке 18', () => {
  expect(17).not.toEqual(18);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 == 0);

it('tgrtgdvrtgrtr', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
});
