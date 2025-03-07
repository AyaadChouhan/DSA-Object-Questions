// Map the Letters in a String
// Given a word, create an object that stores the indexes of each letter in an array.

// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.
// Examples
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(str) {
  let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] = [i]
//   }
//   return obj

let arr = str.split('');
    return arr.reduce((acc, curr, index)=>{
        acc[curr] = [index]
        return acc
    }, {})
}
console.log(mapLetters("grapes"));
