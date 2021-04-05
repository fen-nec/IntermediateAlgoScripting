function addTogether() {
    // return Array.from(arguments).some((v) => typeof v == "string")
    //   ? undefined
    //   : Array.from(arguments).length > 1
    //   ? Array.from(arguments).reduce((a, b) => a + b)
    //   : (b) => Array.from(arguments).reduce((a, b) => a + b) + b;
  
    if (Array.from(arguments).some((v) => typeof v != "number")) {
      return undefined;
    } else if (arguments.length > 1) {
      return Array.from(arguments).reduce((a, b) => a + b);
    } else {
      return (b) => {
        // console.log(typeof b, b)
        if (typeof b == "number") {
          return Array.from(arguments).reduce((a, b) => a + b) + b;
        }
      };
    }
  }
  
  console.log(addTogether(2, 3)); //5
  console.log(addTogether(5)(7)); //12
  console.log(addTogether("http://bit.ly/IqT6zt")); //Undefined
  console.log(addTogether(2)([3])); //Undefined
  console.log(addTogether(2, "3")); //Undefined
  