function translatePigLatin(str) {
    if (/^[^aeiou]+/g.test(str) && /[aeiou]+/g.test(str)) {
      let copy = str.match(/[aeiou]+(?=[^aeiou]+)[a-z]+/gim);
      return copy.concat(str.match(/^[^aeiou]+/gim)).join("") + "ay";
    } else if (!/[aeiou]+/g.test(str)) {
      return str + "ay";
    } else return str + "way";
  }
  
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("rhythm"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin("algorithm"));
  