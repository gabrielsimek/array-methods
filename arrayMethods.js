 
export function arrayMap(array, callback) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray[i] = callback(array[i]);
  }
  return newArray;
}
// const array = [255, 0, 1, 'a', 'b']; 
// const filteredArray = array.filter(item => item);
// console.log(filteredArray);
