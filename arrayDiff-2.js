/**
 * Get elements unique to each array into an array
 * @param {*} arr1 
 * @param {*} arr2 
 */
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((elem) => !arr1.includes(elem))
    .concat(arr1.concat(arr2).filter((elem) => !arr2.includes(elem)));
}
