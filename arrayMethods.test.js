import { arrayMap, arrayFilter, arrayFindIndex, arrayReduce } from './arrayMethods.js';
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
      if(item[0] === 'a') return item;
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


describe('arrayReduce', () => {
  it('applies a callback to every item in an array and keeps track of and returns a specified accumulated value initialized at zero', () => {
    const array = [255, 5, 5, 1, 1];
    const reducedValue = arrayReduce(array, (accumulator, item) => {
      return accumulator += item;
    }, 0) ;
    
    expect(reducedValue).toEqual(267);
 
  });

  it('applies a callback to every item in an array and keeps track of and returns a specified accumulated value not initialized', () => {
    const array = [255, 5, 5, 1, 1];
    const reducedValue = arrayReduce(array, (accumulator, item) => {
      return accumulator += item;
    }) ;
    expect(reducedValue).toEqual(267);
  });

  it('applies a callback to every item in an array and keeps track of and returns a specified accumulated initialized as an array', () => {
    const array = [255, 5, 5, 1, 1];
    const reducedValue = arrayReduce(array, (accumulator, item) => {
      return (item * 2);
    }, []) ;
    expect(reducedValue).toEqual([510, 10, 10, 2, 2]);
  });
  it('applies a callback to every item in an array and keeps track of and returns a specified accumulated initialized as a string', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const reducedValue = arrayReduce(array, (accumulator, item) => {
      return  accumulator + item;
    }, '') ;
    expect(reducedValue).toEqual('abcde');
  });

  it('reverses a string', () => {
    const string = 'abc';
    const array = string.split('');
    const reducedValue = arrayReduce(array, (accumulator, item) => {
      return  item + accumulator;
    }, '') ;
    expect(reducedValue).toEqual('cba');
  });
});

describe('arrayEvery', () => {
  it('returns overall true if all applied callback return true', () => {
    const falseArray = [255, 0, 1, 'a', 'b', false, true, '', null, NaN, undefined, {}];
    const trueArray = ['a', 1, true, []];

    const falseReturn = arrayEvery(falseArray, item => {
      if(item) return item;
    });
    
    const trueReturn = arrayEvery(trueArray, item => {
      if(item) return item;
    });
    
    expect(falseReturn).toEqual(false);
    expect(trueReturn).toEqual(true);
  });
});
