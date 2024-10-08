// Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj) {
   
    // let keys = Object.keys(obj)
    // let values = Object.values(obj);
    // return [keys , values]

    let arrOfKeys = [];
    let arrOfValues = [];

    for (const key in obj) {
        arrOfKeys.push(key)
        arrOfValues.push(obj[key])
    }
    // return [arrOfKeys, arrOfValues]

    
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));