/**
 * replace word and keep original case
 * @param {*} str 
 * @param {*} before 
 * @param {*} after 
 */
function myReplace(str, before, after) {
  return before[0].match(/[A-Z]/g)
    ? str.replace(before, after[0].toUpperCase() + after.slice(1))
    : str.replace(before, after[0].toLowerCase() + after.slice(1));
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
