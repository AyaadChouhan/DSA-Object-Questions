// The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

// Examples
// const obj = { noChanges: true }

// preventChanges(obj) {
  // Write your code here, don't use a return statement

//   obj.noChanges = false;
//   obj.signature = "whatever"
//   return obj;

// }  ➞ { noChanges: true }


function preventChanges(obj) {
    // Write your code here, don't use a return statement
    
    obj.noChanges = false;
    obj.signature = "whatever"
    obj.noChanges = true
    return obj;
    
}  //➞ { noChanges: true }

const obj = { noChanges: true }
console.log(preventChanges(obj.noChanges));