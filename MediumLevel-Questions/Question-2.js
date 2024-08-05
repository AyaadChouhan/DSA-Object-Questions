// Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"

class genertions {
  constructor(num, str) {
    this.num = num;
    this.str = str;
  }
  printValues() {
    const obj = {
      m: {
        "-1": "father",
        "-2": "GrandFather",
        "-3": "Great-grandfather",
        1: "son",
        2: "grandSon",
        3: "greatGrandSon",
      },
      f: {
        "-1": "Mother",
        "-2": "GrandMother",
        "-3": "Great-grandMother",
        1: "daughter",
        2: "grandDaughter",
        3: "greatGrandDaughter",
      },
    };
    return obj[this.str][this.num];
  }
}
let data = new genertions(1, "f");
console.log(data.printValues());



function generation(num, str) {
  const obj = {
    m: {
      "-1": "father",
      "-2": "GrandFather",
      "-3": "Great-grandfather",
      1: "son",
      2: "grandSon",
      3: "greatGrandSon",
    },
    f: {
      "-1": "Mother",
      "-2": "GrandMother",
      "-3": "Great-grandMother",
      1: "daughter",
      2: "grandDaughter",
      3: "greatGrandDaughter",
    },
  };
  return obj[str][num];
}
console.log(generation(-3, "f"));
