import { arrayMap, arrayFilter } from './arrayMethods.js';
describe('arrayMap', () => {
  it('applies a function on each element in an array, returning a new array', () => {
    const array = [255, 0, 1, 'a', 'b'];
    const typesArray = arrayMap(array, item => {
      return typeof(item);
    });
    
    const expected = ['number', 'number', 'number', 'string', 'string'];
    expect(typesArray).toEqual(expected);
  });
});

describe('arrayFilter', () => {
  it('applies a function on each item in an array returning a new array with only items with true or truthy values', () => {
    const array = [255, 0, 1, 'a', 'b', false, true, '', null, NaN, undefined, {}];
    const filteredArrayTruthy = arrayFilter(array, item => {
      if(item) return item;
    });
    const expectedTruthy = [255, 1, 'a', 'b', true, {}];
    expect(filteredArrayTruthy).toEqual(expectedTruthy);

  });

  it('returns a new array containing only type "string" from the original array', () => {
    const array = ['asdf', 1, true, false, '1234', 'qwerty'];
    const filteredByType = arrayFilter(array, item => {
      if(typeof(item) === 'string') return item;
    });
    const expectedTypeArray = ['asdf', '1234', 'qwerty'];
    expect(filteredByType).toEqual(expectedTypeArray);

  });
});

describe('arrayFindIndex', () => {
  it('applies a function on each element in an array which returns the index of an item that meets a specified criteria', () => {
    const array = [255, 0, 1, 'a', 'b', 'abc', 'def'];
    const typesArray = arrayFindIndex(array, item => {
      return item[0] === 'a';
    });
    
    expect(typesArray).toEqual(3);
  });
  it('applies a function on each element in an array which returns the index of an item that meets a specified criteria or -1 if no item found', () => {
    const array = [255, 0, 1, 'a', 'b', 'abc', 'def'];
    const typesArray = arrayFindIndex(array, item => {
      return item[0] === 'z';
    });
    
    expect(typesArray).toEqual(-1);
  });
});
