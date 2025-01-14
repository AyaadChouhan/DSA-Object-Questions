// Burglary Series (15): Number of Occurrences
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

// Examples
// countNumberOfOccurrences({
//   a: "moron",
//   b: "scumbag",
//   c: "moron",
//   d: "idiot",
//   e: "idiot"
// }) ➞ { moron: 2, scumbag: 1, idiot: 2 }

// countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c:"moron"
// }) ➞ { moron: 3 }

// countNumberOfOccurrences({
//   a: "idiot",
//   b: "scumbag"
// }) ➞ { idiot: 1, scumbag: 1 }

function countNumberOfOccurrences(obj) {
  let newObj = {};
  for (const key in obj) {
    newObj[obj[key]] = 0;
  }
  //   for (const key in newObj) {
  //     for (const val in obj) {
  //       if (key === obj[val]) {
  //         newObj[key] += 1;
  //       }
  //     }
  //   }
  //   return newObj;

  let arrOfValue = Object.values(obj);
  for (const key in newObj) {
    for (let i = 0; i < arrOfValue.length; i++) {
        if (key === arrOfValue[i]) {
            newObj[key]++
        }
    }
  }
  return newObj
}

console.log(
  countNumberOfOccurrences({
    a: "idiot",
    b: "scumbag",
  })
);
console.log(
  countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot",
  })
);
x