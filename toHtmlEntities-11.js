/**
 * Convert to html code the chars{} elements
 * @param {*} str 
 */
function convertHTML(str) {
    let chars = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    };
    let result = [];
    str.split("").forEach((element, index) => {
      if (Object.keys(chars).includes(element)) {
        result.push(chars[element]);
      } else result.push(element);
    });
    return result.join("");
  }
  