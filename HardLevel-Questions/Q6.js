// Word to Bitstring to Boolean Array
// Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

// Locate the position of the letter in the English alphabet (from 1 to 26).
// Odd positions will be represented as 1 and even positions will be represented as 0.
// Convert the represented positions to boolean values, 1 for true and 0 for false.
// Store the conversions into an array.
// Examples
// toBoolArray("deep") ➞ [false, true, true, false]
// deep converts to 0110
// d is the 4th alphabet - 0
// e is the 5th alphabet - 1
// e is the 5th alphabet - 1
// p is the 16th alphabet - 0

// toBoolArray("loves") ➞ [false, true, false, true, true]

// toBoolArray("tesh") ➞ [false, true,

function toBoolArray(val) {
  const newArr = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i].charCodeAt(val[i]) % 2 === 0) {
      newArr.push(false);
    } else newArr.push(true);
  }
  return newArr;
}

console.log(toBoolArray("loves"));
