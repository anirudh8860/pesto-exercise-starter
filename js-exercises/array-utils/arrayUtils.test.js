// Write your own test cases.
import { customForEach, customMap, customFilter, customReduce } from './arrayUtils';

describe('Use Math functions', () => {
  test('should use the math functions to get correct values', () => {
    let arr = [1, 4, 9, 16, 25];
    expect(customForEach(arr, element => console.log(element))).toBe(undefined);
    expect(customMap(arr, Math.sqrt)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(customFilter(arr, element => isGreaterThan(element))).toStrictEqual([16, 25]);
    expect(customReduce(arr, (accumulator, currentValue) => accumulator + currentValue, 60)).toBe(115);
  });
});

function isGreaterThan(val) {
  return val > 10;
}
