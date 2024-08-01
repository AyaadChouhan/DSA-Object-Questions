// ES6: Destructuring Objects I
// In JavaScript, you can do basic object assignment like this:

// const obj =  { one : 1, two : 2 }

// let one = obj.one
// let two = obj.two
// However, with ES6 you can assign the variables in a much more succinct way. Use ES6 object destructuring to assign variables one and two to obj.one and obj.two respectively.

// Although you can use let, var, or const for assignment, DO NOT use these in this challenge.

const obj = { one: 1, two: 2 };

let one = obj.one;
let two = obj.two;

const { one: first, two: sec } = obj;

console.log(first);
