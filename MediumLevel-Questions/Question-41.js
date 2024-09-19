// Characters and ASCII Code
// Write a function that transforms an array of characters into an array of objects, where:

// The keys are the characters themselves.
// The values are the ASCII codes of those characters.
// Examples
// toObj(["a", "b", "c"]) ➞ [{a: 97}, {b: 98}, {c: 99}]

// toObj(["z"]) ➞ [{z: 122}]

// toObj([]) ➞ []

function toObj(arr) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let obj = {};
  let n = 97;
  for (const val of alphabet) {
    obj[val] = n;
    n++;
  }
  let keys = Object.keys(obj);
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    for (const el of keys) {
        if (arr[i] === el) {
          result[arr[i]] = obj[el];
        }     
    }
  }
  return result;
}
console.log(toObj(["a", "b", "c", "z"]));
