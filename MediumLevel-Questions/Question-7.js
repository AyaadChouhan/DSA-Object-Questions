// Rounding in Millions
// Given an array of cities and populations, return an array where all populations are rounded to the nearest million.

// Examples
// millionsRounding([
//   ["Nice", 942208],
//   ["Abu Dhabi", 1482816],
//   ["Naples", 2186853],
//   ["Vatican City", 572]
// ])
// [
//   ["Nice", 1000000],
//   ["Abu Dhabi", 1000000],
//   ["Naples", 2000000],
//   ["Vatican City", 0]
// ]

function millionsRounding(arr) {
  // for (let i = 0; i < arr.length; i++) {
  //    let round = Math.round(arr[i][1]);
  //     arr[i] = [arr[i][0] , round]
  // }
  // return arr

  return arr.map(val => {
    let round = Math.round(val[1]);
    return [val[0], round];
  });
}

console.log(
  millionsRounding([
    ["Nice", 1000000],
    ["Abu Dhabi", 1000000],
    ["Naples", 2000000],
    ["Vatican City", 0],
  ])
);
