// // Printer Levels
// // Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

// // Examples
// // inkLevels({
// //   "cyan": 23,
// //   "magenta": 12,
// //   "yellow": 10
// // }) ➞ 10

// // inkLevels({
// //   "cyan": 432,
// //   "magenta": 543,
// //   "yellow": 777
// // }) ➞ 432

// // inkLevels({
// //   "cyan": 700,
// //   "magenta": 700,
// //   "yellow": 0
// // }) ➞ 0

// function inkLevels(obj) {
//   let val = Object.values(obj);
//   // let sortArr = val.sort((a, b)=>{
//   //     return a - b
//   // })
//   // return Number(sortArr.slice(0, 1).join())

//   //===============================

//   // return Math.min(...val)

//   let num = 0;
//   for (const key in obj) {
//     if (key <= num) {
//       num = key;
//     }
//   }
//   return num;
// }
// let obj = {
//   cyan: 700,
//   magenta: 700,
//   yellow: 0,
// };
// console.log(inkLevels(obj));
