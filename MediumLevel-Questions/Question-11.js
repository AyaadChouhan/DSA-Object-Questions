// ES6: Destructuring Objects IV
const obj =  { first: "James", last: "Baker", alias: "JB"  }

// var { first = "John", last = "Doe", alias } = obj

// console.log(nickname) // outputs nickname is not defined


let {first , last , alias} = obj
console.log(last);