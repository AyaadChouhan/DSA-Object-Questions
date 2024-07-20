// Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// Examples
// { 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"

// { 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"

// { 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"

class callsAgain {
  constructor({ 1: first, 2: sec, 3: third }) {
    this.first = first;
    this.second = sec;
    this.third = third;
  }
  print() {
    return `${this.first} ${this.second} ${this.third} ${this.second}`;
  }
}

// function callsAgain(obj) {
//   this.first = obj[1];
//   this.sec = obj[2];
//   this.third = obj[3];
//   callsAgain.prototype.print = () => {
//     return `${this.first} ${this.sec} ${this.third} ${this.sec}`;
//   };
// }
let data = new callsAgain({ 1: "Must", 2: "lawyer", 3: "call" });
let data2 = new callsAgain({ 1: "Me", 2: "innocent", 3: "is" });
console.log(data2.print());
