// Check if Number is within a Given Range
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// Examples
// isInRange(4, { min: 0, max: 5 }) ➞ true

// isInRange(4, { min: 4, max: 5 }) ➞ true

// isInRange(4, { min: 6, max: 10 }) ➞ false

// isInRange(5, { min: 5, max: 5 }) ➞ true

function isInRange(num, obj) {
  let val = Object.values(obj);

  for (const key in obj) {
   if (obj[key] === num) {
     return true
   }
  }
  // for (const values of val) {
  //     if (values === num) {
  //         return true
  //     }
  // }
  return false;
}
console.log(isInRange(5, { min: 0, max: 4 }));
