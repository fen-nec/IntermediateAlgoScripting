/**
 * Find a letter missing in an interrupted range (1, 2, ..)
 * @param {*} str 
 */
function fearNotLetter(str) {
  let result = [];
  let i = str.charCodeAt(0);
  while (i <= str.charCodeAt(str.length - 1)) {
    result.push(String.fromCharCode(i));
    i++;
  }
  return result.filter((v) => !str.split("").includes(v)).join("").length > 0
    ? result.filter((v) => !str.split("").includes(v)).join("")
    : undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
