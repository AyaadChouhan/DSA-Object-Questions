// // Destructuring Assignment
// // You can assign variables from arrays like this:

// // arr = [1, 2, 3, 4, 5, 6, 7, 8]
// // first = arr[0]
// // second = arr[1]
// // third = arr[2]
// // other = arr.slice(3)

// // console.log(first) ➞ outputs 1
// // console.log(second) ➞ outputs 2
// // console.log(third) ➞ outputs 3
// // console.log(other) ➞ outputs [4, 5, 6, 7, 8]
// // However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).

// let obj = {
//     one : 1,
//     two : 2,
//     three : 3,
//     four : 4,
//     five : 5
// }

// let {one : first, two, third , ...four} = obj
// console.log(four);

// var findMaxConsecutiveOnes = function (nums) {
//     let arr = [];
//     let count = 0;
//     for (let i = 0; i <= nums.length; i++) {
//       if (nums[i] === 1) {
//         count++;
//       } else if (nums[i] !== 1) {
//         arr.push(count);
//         count = 0;
//       }
//     }

//     for (let j = 0; j <= arr.length; j++) {
//       if (count <= arr[j]) {
//         count = arr[j];
//       }
//     }
//     return count;
//   };

var findMaxConsecutiveOnes = function (n) {
  let res = 0,
    count = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === 1) {
      count++;
      if (count > res) {
        res = count;
      }
    } else {
      count = 0;
    }
  }
  return res

  //   let arr = [];
  //   for (let i = 0; i <= nums.length; i++) {
  //     if (nums[i] === 1) {
  //       count++;
  //     } else if (nums[i] !== 1) {
  //       arr.push(count);
  //       count = 0;
  //     }
  //   }
  //   return Math.max(...arr);
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
