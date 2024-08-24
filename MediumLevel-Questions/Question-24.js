// ES6: Destructuring Objects VI
// function shirtSize({size = "big"}) {
//   return size
// }

// shirtSize()  // error: Cannot destructure property "size" of "undefined" or "null"
// The preceding code produces an error because no object was passed to the function. Fix the function to return the default size, even if nothing is passed to the function. Don't remove the {size = "big"} object in the parameter and don't change the return statement.

// Example
function shirtSize() {
    // let obj = {
    //     size : "big"
    // }
    let {size} = {size : "big"}
    return size
  }
  console.log(shirtSize());