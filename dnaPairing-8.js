function pairElement(str) {
    let result = [];
    str.split("").forEach((element) => {
      switch (element) {
        case "G":
          result.push(["G", "C"]);
          break;
        case "C":
          result.push(["C", "G"]);
          break;
        case "A":
          result.push(["A", "T"]);
          break;
        case "T":
          result.push(["T", "A"]);
          break;
        default:
          break;
      }
    });
    return result;
  }
  
  pairElement("GCG");