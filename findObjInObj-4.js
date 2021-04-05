function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    collection.forEach((element) => {
      if (
        // Look up if source[key, ] is contained in collection [...keys]
        Object.keys(source).every((v) => Object.keys(element).includes(v)) &&
        // Look up if source[, value] is contained in collection [...values]
        Object.values(source).every((v) => Object.values(element).includes(v))
      ) {
        arr.push(element);
      }
    });
    // Only change code above this line
    return arr;
  }
  
  console.log(
    whatIsInAName(
      [
        /*0*/ { first: "Romeo", last: "Montague" },
        /*1*/ { first: "Mercutio", last: null },
        /*2*/ { first: "Tybalt", last: "Capulet" },
      ],
      { last: "Capulet" }
    )
  );
  
  console.log(
    whatIsInAName(
      [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
      { apple: 1, cookie: 2 }
    )
  );
  
  // console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }));
  