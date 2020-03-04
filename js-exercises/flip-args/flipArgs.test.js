// write your own test cases
import { flipArgs } from './flipArgs';

describe('Use to flip the values', () => {
  test('should flip all the values in reverse order than they were originally inserted', () => {
    expect(flipArgs('a', 'b', 'c', 'd')).toStrictEqual(['d', 'c', 'b', 'a']);
    expect(flipArgs('plate_1', 'plate_2', 'plate_3', 'plate_4')).toStrictEqual(['plate_4', 'plate_3', 'plate_2', 'plate_1']);
  });
  test('should return same sequence when only one value is in arguement', () => {
    expect(flipArgs('abcdef')).toStrictEqual(['abcdef']);
    expect(flipArgs('word')).toStrictEqual(['word']);
  });
});
