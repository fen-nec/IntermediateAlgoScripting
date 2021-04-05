/**
 * Seek and destroy some items (arguments[1]...) in some array (arguments[0])
 * @param {*} arr 
 */

function destroyer(arr) {
    return arr.filter((v) => !Array.from(arguments).slice(1).includes(v));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  