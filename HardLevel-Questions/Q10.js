// Super Strict Grading
// Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!
function whoPassed(obj) {
  let newArr = [];
  for (const key in obj) {
    let booleanVal = false;
    for (const el of obj[key]) {
      let val = el.split("/");
      if (val[0] / val[1] === 1) {
        booleanVal = true;
      } else {
        booleanVal = false;
        break;
      }
    }
    if (booleanVal) {
      newArr.push(key);
    }
  }
  return newArr;
}

console.log(
  whoPassed({
    John: ["5/5", "50/50", "10/10", "10/10"],
    Sarah: ["4/8", "50/57", "7/10", "10/18"],
    Adam: ["8/10", "22/25", "3/5", "5/5"],
    Barry: ["3/3", "20/20"],
  })
); // ➞ ["Barry", "John"]

// whoPassed({
//   Zara: ["10/10"],
//   Kris: ["30/30"],
//   Charlie: ["100/100"],
//   Alex: ["1/1"],
// }); //➞ ["Alex", "Charlie", "Kris", "Zara"]

// whoPassed({
//   Zach: ["10/10", "2/4"],
//   Fred: ["7/9", "2/3"],
// });

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  diameter() {
    return this.radius * 2;
  }

  getC() {
    return 2 * Math.PI * this.radius;
  }

  getA() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const c1 = new Circle(3);
const c2 = new Circle(5);

console.log(c1.radius);
console.log(c1.diameter);
console.log(c1.getC());
console.log(c1.getA());
