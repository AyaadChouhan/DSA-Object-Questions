// ES6: Destructuring Objects IX
// Given an array of user objects. If we just wanted to get the name of the third object in the array, one way could be to use an array method like:

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" },
];

// let thirdUser = users.filter((e, i) => i === 2 )[0].name
// console.log(thirdUser)  // "Jeremy"

let [
  { name: firstUser },
  { name: secUser },
  { name: thirdUser },
  { name: fourthUser },
] = users;

console.log(thirdUser )