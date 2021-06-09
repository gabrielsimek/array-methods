import { arrayMap, arrayFilter, arrayFindIndex, arrayReduce, arrayEvery } from './arrayMethods.js';
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
      return item;
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
    const aArray = arrayFindIndex(array, item => {
      if(item[0] === 'a') return item;
    });
    
    expect(aArray).toEqual(3);
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

  it('returns and object when arrayReduce is initialized as an object', () => {
    const arrayOfNames = ['Danny', 'Ryan', 'Marty'] ;
    
    const reducedValue = arrayReduce(arrayOfNames, (accumulator, item) => {
      accumulator[item] = 'teacher';
      return accumulator;
    }, {}) ;
    expect(reducedValue).toEqual({ Danny: 'teacher', Ryan: 'teacher', Marty: 'teacher' });
  });
  it('changes array of numbers to an object with the key of the original number in array and value of the original number + 1', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const parameters = (accumulator, item) => {
      
      accumulator[item] = item + 1;
      return accumulator;
    };
    // const newNumber = array.reduce((acc, value) => acc + value, []);
    const newArray = arrayReduce(array, parameters, {});
    expect(newArray).toEqual({
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6,
      6: 7
    });
  });

});

describe('arrayEvery', () => {
  it('returns overall true if all applied callback return true', () => {
    const falseArray = [255, 0, 1, 'a', 'b', false, true, '', null, NaN, undefined, {}];
    const trueArray = [5, 6, 7, 8];

    const falseReturn = arrayEvery(falseArray, item => {
      if(item) return item;
    });

    const trueReturn = arrayEvery(trueArray, item => {
      if(item >= 5) return item;
    });
    
    expect(falseReturn).toEqual(false);
    expect(trueReturn).toEqual(true);
  });
});
