// Learn Lodash: matchesProperty, Check if an Object Contains a Key Value Pair
// Write your own version of the lodash _.matchesProperty function using vanilla JavaScript. matchesProperty returns a function that that compares the given object and a path, which is a key-value pair, then determines if the object includes the pair.

// For instance, when using the regular JavaScript find method you would write it like so:

// arrayOfCars.find(car => car.year === 2020)
// Because the matchesProperty function returns a function it can be used to replace the callback function written in the find method. Using matchesProperty it could look like this:

// arrayOfCars.find(matchesProperty("year", 2020))
// This is a helper function that is often used by other more advanced lodash functions that want to check for a match. As we write more lodash functions we will need this helper.

// This is very similar to the matches function. The only difference is the way the arguments are passed in, matches requires an object, matchesProperty requires two strings representing a key value pair.

// Arguments
// path (Array or String): The path key-value pair you are using to see if it is included in the object.
// returns: A new function.
// Examples
const objects = [
  { "a": 1, "b": 2, "c": 3 },
  { "a": 4, "b": 5, "c": 6 }
]
// _.find(objects, _.matchesProperty("a", 4))
// ➞ [{ "a": 4, "b": 5, "c": 6 }]

function findPair(arrObj, key, val){
    // for (let i = 0; i < arrObj.length; i++) {
    //     for (const keys in arrObj[i]) {
    //          if(keys === key && arrObj[i][keys] === val){
    //              return arrObj[i]
    //          }
    //     }
    // }
//=====================================================


}
console.log(findPair(objects, "c", 6));