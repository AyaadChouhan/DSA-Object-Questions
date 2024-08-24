// Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// Examples
// mostExpensiveItem({
//   piano: 2000,
// }) ➞ "piano"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
// }) ➞ "tv"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }) ➞ "stereo"

function mostExpensiveItem(obj) {
  let val = Object.values(obj);
  let maxVal = Math.max(...val);
  for (const key in obj) {
    for (let i = 0; i < val.length; i++) {
      if (obj[key] === maxVal) {
        return key;
      }
    }
  }
}
console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
);
