// Learn Lodash: isEqual, Check if Two Items Are Equal
// Write your own version of the lodash _.isEqual function using vanilla JavaScript (so, no external libraries - namely, lodash; don't import it). isEqual performs a deep comparison between two values to determine if they are equal. You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.

// This is used as a helper function for many more advanced lodash functions in instances where comparison between objects or arrays is needed, but regular JavaScript comparison is too strict.

// Arguments
// value (can be anything): The first value to compare.
// other (can be anything): The other value to compare against.
// returns: (boolean): Returns true if they are the same, otherwise false.
// Examples
// const objects =
// var object = { "a": 1 }
// var other = { "a": 1 }
// isEqual(object, other)
// returns true
// object === other
// returns false

// function comparisonObj(firstObj, secObj) {
//     return firstObj === secObj
// }
// let object = { "a": 1 , b :{age:  22}}
// let other = object;
// object["a"] = 5;
// object.b.age = 24
// console.log(other);

// // let other = { "a": 1 }
// console.log(comparisonObj(object, other));

//

const obj1 = { a: { c: 1, d: 3 }, b: 2 };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.a.c = 4;
obj2.b = 20;
obj1.a.c = 10;
console.log(obj1);

const arr = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Harry" },
];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i].id] = arr[i].name;
}
console.log(obj);

return arr.reduce((acc, curr) => {
  acc[curr.id] = curr.name;
  return acc;
}, {});
