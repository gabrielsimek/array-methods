 
export function arrayMap(array, callback) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

export function arrayFilter(array, callback) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    //length is always the last index + 1
    if(callback(array[i])) newArray[newArray.length] = array[i];
  }
  return newArray;
}

export function arrayFindIndex(array, callback) {
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])) return i;
  }
  return -1;
}
export function arrayReduce(array, callback, initialValue) {
  
  if(typeof initialValue === 'number' || initialValue === undefined){
    let accumulator;
    let i;
    if(initialValue !== undefined)  accumulator = initialValue;
    else accumulator = array[0];
    for(initialValue !== undefined ? i = 0 : i = 1; i < array.length; i++) {
      accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
  } 
  if(Array.isArray(initialValue)){
    const accumulator = initialValue;
    for(let i = 0; i < array.length; i++){
      accumulator[i] = callback(accumulator, array[i]);
    }
    return accumulator;
  }
  if(typeof(initialValue) === 'string') {
    
    let accumulator = initialValue;
    for(let i = 0; i < array.length; i++){
      accumulator =  callback(accumulator, array[i]);
      console.log(accumulator);
    }
    return accumulator;
  }
}

