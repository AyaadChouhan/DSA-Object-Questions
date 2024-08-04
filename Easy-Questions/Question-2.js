// Slightly Superior
// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Create a function that returns whether the first array is slightly superior to that of the second.

// Examples
// isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

// isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

// isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

// isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

// isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

function isFirstSuperior(arr1, arr2) {
  //   let val = false;
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] > arr2[i]) {
  //       val = true;
  //     } else if (arr1[i] < arr2[i]) {
  //       val = false;
  //     }
  //   }
  //   return val;

  return arr1.reduce((acc, curr, index) => {
    if (curr > arr2[index]) {
      acc = true;
    } else if (curr < arr2[index]) {
      acc = false;
    }
    return acc;
  }, false);
}

console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));
console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));
