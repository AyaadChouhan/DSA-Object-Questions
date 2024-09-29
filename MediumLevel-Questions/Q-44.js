// Who's The Oldest?
// Given an object containing the names and ages of a group of people, return the name of the oldest person.

// Examples
// oldest({
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29
// }) ➞ "Emma"

// oldest({
//   Max: 9,
//   Josh: 13,
//   Sam: 48,
//   Anne: 33
// }) ➞ "Sam"

function findOldest(obj) {
  let val = 0;
  let result = "";
  //   for (const key in obj) {
  //     if (val < obj[key]) {
  //       val = obj[key];
  //       result = key
  //     }
  //   }

  let keys = Object.keys(obj);
  let values = Object.values(obj);

  return values.reduce((acc, curr, index) => {
    let getIndex= 0;
    if (acc < curr) {
      acc = curr;
      getIndex = index
    }
    return keys[getIndex]
  }, 0);
  return result;
}
console.log(
  findOldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33,
  })
);
console.log(
  findOldest({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29,
  })
);
