// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

class toArr {
  constructor(obj) {
    this.obj = obj;
  }
  result() {
    let newArr = [];
    for (let key in this.obj) {
      newArr.push([key, this.obj[key]]);
    }
    return newArr;
  }
  entries() {
    return Object.entries(this.obj);
  }
}
const data = new toArr({ a: 1, b: 2 });
console.log(data.entries());

//================

function toArray(obj) {
  let entries = Object.entries(obj);
  console.log(entries);

//===================

  let arr = [];
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}
console.log(toArray({ shrimp: 15, tots: 12 }));
