// function steamrollArray(arr) {
//   let result = [];

//   function flatten(x) {
//     if (Array.isArray(x)) {
//       for (const key in x) {
//         flatten(x[key]);
//       }
//     } else {
//       result.push(x);
//     }
//   }
//   flatten(arr);
//   return result;
// }

function steamrollArray(arr) {
    for (var i = 0; i <= arr.length; i++) {
      if (Array.isArray(arr[i]) === true) {
        arr = arr.reduce((a, b) => a.concat(b), []);
        i = 0;
      }
    }
  
    return arr;
  }
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  