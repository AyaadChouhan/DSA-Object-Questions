// Ageing the Population...
// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

// Examples
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1) ➞ {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }

// afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19) ➞ {
//   "Baby" : 21,
//   "Child" : 27,
//   "Teenager" : 34,
//   "Adult" : 44,
//   "Elderly" : 90
// }

// afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5) ➞ {
//   "Genie" : 1005,
//   "Joe" : 45
// }

function afterNYears(obj, n) {
    // for (const key in obj) {
    //   obj[key] = obj[key] + n 
    // }
    // return obj

    let key = Object.keys(obj)
    let myobj = {};
    for (let i = 0; i < key.length; i++) {
        myobj[key[i]] = obj[key[i]] + n 
    }
    return myobj
}
console.log(afterNYears({
       "Genie" : 1000,
       "Joe" : 40
     }, 5));


     console.log(afterNYears({
        "Baby" : 2,
        "Child" : 8,
        "Teenager" : 15,
        "Adult" : 25,
        "Elderly" : 71
      }, 19));