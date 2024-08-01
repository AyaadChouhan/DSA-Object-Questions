// Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.

// Examples
// hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false

// hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false

// hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true


function hasKey(obj, val) {
    // for (const key in obj) {
    //     if (key === val) {
    //         return true
    //     }
    // }
    // return false
    return Object.hasOwn(obj,val)
    return Object.keys(obj).includes(val)
    return obj.hasOwnProperty(val)
    return val in obj
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"))
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"))