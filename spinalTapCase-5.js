/**
 * return words separated by - only
 * @param {*} str
 */
function spinalCase(str) {
  return str
    .split(/([A-Z][a-z]+|[a-z]+)/gm)
    .filter((v) => /[A-Za-z]+/.test(v))
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("The_Andy_Griffith_Show"));
