
// function *myFunc(val) {
//     let myData = yield "hello world";
//     myData = val
//     return myData
// }
// let generatorFunc = myFunc(22)

// console.log(generatorFunc.next())
// // console.log(generatorFunc.next())
// console.log(generatorFunc.next())

// function iterator(str) {
//   let i = 0;
//   return {
//     next() {
//       if (i < str.length) {
//         return {
//           val: str[i++],
//           done: false,
//         };
//       } else {
//         return { val: undefined, done: true };
//       }
//     },
//   };
// }
// let calliter = iterator("str");
// console.log(calliter.next());
// console.log(calliter.next());
// console.log(calliter.next());
