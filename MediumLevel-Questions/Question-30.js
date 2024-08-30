// Count the Letters and Digits
// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

// Examples
// countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

// countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

// countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }

function countAll(data) {
  let obj = {
    Digits: 0,
    Letters: 0,
  };
  for (let i = 0; i < data.length; i++) {
    let val = Number(data[i]);
    if (isNaN(val)) {
      obj.Letters++;
    } else {
      obj.Digits++;
    }
  }
  return obj;
}
console.log(countAll("H3ll0 Wor1d"));
console.log(countAll("334343"));