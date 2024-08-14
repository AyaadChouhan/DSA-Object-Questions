// Check If objOne Is Equal to objTwo
// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

// Example #1
// // The first object parameter.

// {
//   name: "Benny",
//   phone: "3325558745",
//   email: "benny@edabit.com"
// }
// // The second object parameter.
// {
//   name: "Jason",
//   phone: "9853759720",
//   email: "jason@edabit.com"
// }
// ➞ false

function checkObj(obj1, obj2) {
  let val = true;
  // for (const key in obj1) {
  //    if (obj1[key] !== obj2[key]) {
  //     return false
  //    }
  // }
  // return val

  let firstObjKey = Object.keys(obj1);
  let secObjKey = Object.keys(obj2);
  let secObjVal = Object.values(obj2);

  return firstObjKey.reduce((acc, curr, ind) => {
    // if (obj1[curr] !== obj2[curr]) {
    //    acc = false
    // }

    //=================
    if (obj1[curr] !== secObjVal[ind]) {
      acc = false;
    }
    return acc;
  }, true);
}
console.log(
  checkObj(
    {
      name: "jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    },
    {
      name: "jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    }
  )
);
