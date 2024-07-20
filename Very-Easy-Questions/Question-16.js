// Return Sole Element in a Set
// Given a set containing an element, return the sole element.

// Examples
// const first = new Set();
// first.add(1);
// elementSet(first) ➞ 1

// const second = new Set();
// second.add("apple");
// elementSet(second) ➞ "apple"

// const third  = new Set();
// third.add(false);
// elementSet(third) ➞ false

function elementSet(set) {
  //   for (const key of set) {
  //    return key
  //   }

  // return [...set][0]
  return set.keys().next().value;
}
let first = new Set();
first.add(1);
console.log(elementSet(first));

let second = new Set();
second.add("apple");

console.log(elementSet(second));

let third = new Set();
third.add(false);

console.log(elementSet(third));
