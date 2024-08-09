// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj) {
  let outerArr = [];
  let arr = [];
//   for (let key in obj) {
//     arr.push(key);
//     arr.push(obj[key]);
//     outerArr.push(arr);
//     arr = [];
//   }
//   return outerArr;

let keys = Object.keys(obj)
let values = Object.values(obj)
   return keys.map((el, ind)=>{
        return [el, values[ind]]
    })
}


console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10,
  })
);
