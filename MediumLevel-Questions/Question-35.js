// ES6: Destructuring Objects VII
// In normal object literals you can create dynamic property names by using computed values:

// let key = "name"
// let foo = {[key]: "bar"}

// console.log(foo.name); // "bar"
// However, in object destructuring it works a little different:

// let key = "foo"
// let {[key]: "foo"} = {foo: "Jessie"}

// console.log(foo)  // Invalid destructuring assignment target
// The error above is caused by the literal string "foo". You cannot rename variables this way. You can read the MDN Docs Computed object property names and destructuring section to find the correct way.

// Fix the function so console.log(foo) returns Jessie. Leave all variable names unchanged. Ignore the .toString() function (used for validation).

// Example
// console.log(foo) ➞ "Jessie"

let key2 = "name"
let foo2 = {[key2]: "bar"}

let key = "foo"
let {[key]: foo} = {foo: "Jessie"}

console.log(foo)