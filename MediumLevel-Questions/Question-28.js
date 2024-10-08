// Invert Keys and Values
// Write a function that inverts the keys and values of an object.

// Examples
// invert({ "z": "q", "w": "f" })
// ➞ { "q": "z", "f": "w" }

// invert({ "a": 1, "b": 2, "c": 3 })
// ➞ { 1: "a", 2: "b", 3: "c" }

// invert({ "zebra": "koala", "horse": "camel" })
// ➞ { "koala": "zebra", "camel": "horse" }

function invert(obj) {
    let newObj = {}
  const keys = Object.keys(obj);
     keys.forEach(el => {
        let val = obj[el]
        newObj[val] = el
    });
    return newObj


//   for (const val in obj) {
//     let newVal = obj[val];
//     newObj[newVal] = val;
//   }
//   return newObj;
}
console.log(invert({ zebra: "koala", horse: "camel" }));
