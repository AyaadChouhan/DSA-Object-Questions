// Is it an Object?
// Create a function to check whether the given parameter is an Object or not.

// Examples
// isObject(function add(x,y) {return x + y}) ➞ true

// isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true

// isObject(null) ➞ false

// isObject("") ➞ false

function isObject(para) {
  const primitiveDataType = [
    "number",
    "string",
    "boolean",
    "bigInt",
    null,
    undefined,
  ];
  const type = typeof para;
  for (let i = 0; i < primitiveDataType.length; i++) {
    if (primitiveDataType[i] === para) {
      return false;
    }
  }
  return true;

  //   if (primitiveDataType.includes(type) || para === null) {
  //     return false
  //   } else{
  //     return true
  //   }

  return primitiveDataType.includes(type) || para === null ? false : true;
}

console.log(isObject(new RegExp("^[a-zA-Z0-9]+$", "g")));
console.log(
  isObject(function add(x, y) {
    return x + y;
  })
);
console.log(isObject(null));
