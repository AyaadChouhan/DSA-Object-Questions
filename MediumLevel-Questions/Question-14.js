// Burglary Series (03): Is It Gone?
// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

// Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:

// "Rambo is gone..." if the name is on the list.
// "Rambo is here!" if the name is not on the list.
// Note that the first letter of the name in the return statement is capitalized.

// Examples
// const obj = {
//   tv: 30,
//   timmy: 20,
//   stereo: 50,
// } ➞ "Timmy is gone..."
// Timmy is in the object.

// const obj = {
//   tv: 30,
//   stereo: 50,
// } ➞ "Timmy is here!"
// Timmy is not in the stolen list object.

// const obj = { } ➞ "Timmy is here!"
// Timmy is not in the object.

function isAvailable(obj, name) {
  let key = Object.keys(obj);

  return key.reduce((acc, curr) => {
    if (curr === name) {
      acc = "Timmy is here";
    }
    return acc;
  }, "Timmy is gone");

  //     console.log(key);
  //     for (const element of key) {
  //         if (name.toLowerCase() === element) {
  //             return "Timmy is here"
  //         }
  //     }
  //     return "Timmy is gone"

  
  //   for (const key in obj) {
  //     if (key == name) {
  //       return "Timmy is here";
  //     }
  //   }
  //   return "Timmy is gone";
}
console.log(
  isAvailable(
    {
      tv: 30,
      timmy: 20,
      stereo: 50,
    },
    "timmy"
  )
);
