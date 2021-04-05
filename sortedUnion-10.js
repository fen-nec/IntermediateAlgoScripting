/**
 * Take three arrays and return one with single values.
 * @param  {...any} arr 
 */

function uniteUnique(...arr) {
    return arr.flat().filter((v, i, arr) => arr.indexOf(v) === i);
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
  