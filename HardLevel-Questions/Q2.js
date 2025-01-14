// Frequency Distribution
// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

// Examples
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}

function getFrequencies(arr) {
  let obj = {};
  let count = 0;

  //   for (let item of arr) {
  //     obj[item] = count++;
  //   }

//======================================================
  let val = [];
  for (let i = 0; i < arr.length; i++) {
    if (!val.includes(arr[i])) {
      val.push(arr[i]);
    }
  }

  for (let item of val) {
    obj[item] = 0;
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        obj[item] = obj[item] + 1;
      }
    }
  }
  return obj;
}
console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([1, 2, 3, 3, 2]));
