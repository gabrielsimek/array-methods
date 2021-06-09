 
export function arrayMap(array, callback) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray[i] = callback(array[i]);
  }
  return newArray;
}
const array = [255, 0, 1, 'a', 'b', false, true, '', null, undefined, NaN];
const filteredArray = array.filter(item => item);
console.log(filteredArray);

export function arrayFilter(array, callback) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    //length is always the last index + 1
    if(callback(array[i])) newArray[newArray.length] = array[i];
  }
  return newArray;
}
