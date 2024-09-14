// Burglary Series (09): Filter Values
// The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.

// Examples
// { tv: 4999, guitar:5000, fork: 5001 } ➞ { guitar:5000, fork: 5001 }

// { tv: 4999 } ➞ {}

// { guitar: 5000 } ➞ { guitar: 5000 }

// {} ➞ {}

function sortedFunc(obj) {
  const newObj = {};
  //   const keys = Object.keys(obj);
  //   for (const el of keys) {
  //     if (obj[el] >= 5000) {
  //       newObj[el] = obj[el];
  //     }
  //   }
  
  for (const key in obj) {
    if (obj[key] >= 5000) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(sortedFunc({ tv: 4999, guitar: 5000, fork: 5001 }));
console.log(sortedFunc({ tv: 4999 }));
