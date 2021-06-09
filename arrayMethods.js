 
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
  if(Array.isArray(initialValue)){
    const accumulator = initialValue;
    for(let i = 0; i < array.length; i++){
      accumulator[i] = callback(accumulator, array[i]);
    }
    return accumulator;
  } else {
    // if((typeof initialValue === 'number' || typeof initialValue === 'string' ||  typeof initialValue === 'object' || initialValue === undefined) && !Array.isArray(initialValue)){
    console.log(initialValue);
    let accumulator;
    let i;
    if(initialValue !== undefined)  accumulator = initialValue;
    else accumulator = array[0];
    for(initialValue !== undefined ? i = 0 : i = 1; i < array.length; i++) {
      accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
  } 
}

export function arrayEvery(array, callback){
  for(let i = 0; i < array.length; i++){
    if(!callback(array[i])) return false;
  }
  return true;
}


// const names = ['Danny', 'Ryan', 'Marty'];
// const newObj = names.reduce((acc, item) => {
//   acc[item] = 'teacher';
//   return acc;
// }, {});
// console.log(newObj);
