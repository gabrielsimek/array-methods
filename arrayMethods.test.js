import { arrayMap } from './arrayMethods.js';
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
