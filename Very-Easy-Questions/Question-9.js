// ES6: Destructuring Objects VIII
// Using basic object destructuring you can assign variables name and email:

// let { name, email } = { name: "John", email: "john@example.com" }

// console.log(name)  // "John"
// console.log(email)  // "john@example.com"
// What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:

// let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}

// rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true

let obj = {
    name: "John",
    email: "john@example.com",
    country : "USA",
    hobbies : "travelling"
}
let {name, email, ...rest} = obj
console.log(rest);
console.log(email);