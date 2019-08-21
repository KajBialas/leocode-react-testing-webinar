import add from './index';

test('should add 2 numbers', () => {
  const result = add(4,5);
  expect(result).toBe(9);
});