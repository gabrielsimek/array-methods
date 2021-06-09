 
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
