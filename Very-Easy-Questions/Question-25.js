// Is the Object Empty?
// Write a function that returns true if an object is empty, and false otherwise.

// Examples
// isEmpty({}) ➞ true

// isEmpty({ a: 1 }) ➞ false

function isEmpty(obj) {
    // if (Object.entries(obj).length === 0) {
    //     return true;
    // }
    // return false


    // return (Object.entries(obj).length === 0) ? true : false
    // return obj.lemgth


    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
           return false
        }
    }
    return true
}
console.log(isEmpty({}));
console.log(isEmpty({a: 1}));
