// Get Student Top Notes
// Create a function that takes an array of students and returns an array of their top notes. If the student does not have notes then let's assume their top note is equal to 0.

// Examples
// getStudentTopNotes([
//   {
//     id: 1,
//     name: "Jacek",
//     notes: [5, 3, 4, 2, 5, 5]
//   },
//   {
//     id: 2,
//     name: "Ewa",
//     notes: [2, 3, 3, 3, 2, 5]
//   },
//   {
//     id: 3,
//     name: "Zygmunt",
//     notes: [2, 2, 4, 4, 3, 3]
//   }
// ]) ➞ [5, 5, 4]

// function getStudentTopNotes(arr) {
//     let newArr = [];
//     for (const el of arr) {
//         let temp = 0;
//         for (const val of el.notes) {
//             if (val > temp) {
//                 temp = val
//             }
//         }
//         newArr.push(temp)
//     }
//     return newArr
// }
// console.log(getStudentTopNotes([
//       {
//         id: 1,
//         name: "Jacek",
//         notes: [5, 3, 4, 2, 5, 5]
//       },
//       {
//         id: 2,
//         name: "Ewa",
//         notes: [2, 3, 3, 3, 2, 5]
//       },
//       {
//         id: 3,
//         name: "Zygmunt",
//         notes: [2, 2, 4, 4, 3, 3]
//       }
//     ]));

class GetStudentTopNotes {
  constructor(arr) {
    this.arr = arr;
  }
  print() {
    const newArr = [];
    for (const el of this.arr) {
      let temp = 0;
      for (const val of el.notes) {
        if (val > temp) {
          temp = val;
        }
      }
      newArr.push(temp);
    }
    return newArr;
  }
}
let arrObj = [
    {
      id: 1,
      name: "Jacek",
      notes: [5, 3, 4, 2, 5, 5],
    },
    {
      id: 2,
      name: "Ewa",
      notes: [2, 3, 3, 3, 2, 5],
    },
    {
      id: 3,
      name: "Zygmunt",
      notes: [2, 2, 4, 4, 3, 3],
    },
  ]
const data = new GetStudentTopNotes(arrObj);

console.log(data.print());