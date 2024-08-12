// ES6: Destructuring Objects X
// Given an array of user objects.

// let names = []

// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]

// for(/* add code inside these parenthesis only */) {
//       names.push(name)
// }

// console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]


function getName(arrObj) {
    const newArr = [];
    // for (const element of arrObj) {
    //     let  {name} = element;

    //     newArr.push(name)
    // }
    // return newArr

    for (let i = 0; i < arrObj.length; i++) {
        const {name : username} = arrObj[i];
        newArr.push(username)      
    }
    return newArr
}
console.log(getName( [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
  ]));