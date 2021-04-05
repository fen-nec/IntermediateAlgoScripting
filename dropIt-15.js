/**
 * find the first element that func(element) returns true and 
 * slice the array from there
 * @param {*} arr
 * @param {*} func
 */

function dropElements(arr, func) {
  let first = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      first = i;
      break;
    }
  }
  return first.length === 0 ? first : arr.slice(first);
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
