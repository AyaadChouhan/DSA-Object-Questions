// International Greetings
// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

// const GUEST_LIST = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina"
// }
// Write a function that takes in a name and returns a name tag, that should read:

// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:

// "Hi! I'm a guest."
// Examples
// greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

// greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

// greeting("Monti") ➞ "Hi! I'm a guest."

function greeting(val){
    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
      }

    //   for (const key in GUEST_LIST) {
    //     if (key === val) {
    //         return `Hi! I'm ${key}, and I'm from ${GUEST_LIST[key]}.`
    //     }
    //   }
    //   return "Hi! I'm a guest."

    let key = Object.keys(GUEST_LIST);
    for (let i = 0; i < key.length; i++) {
        if (key[i] === val) {
             return `Hi! I'm ${key[i]}, and I'm from ${GUEST_LIST[key[i]]}.`
        }        
    }
     return "Hi! I'm a guest."
}
console.log(greeting("Sam"))