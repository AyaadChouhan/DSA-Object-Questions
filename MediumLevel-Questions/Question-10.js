// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples
// const stolenItems = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// } ➞ 100

// const stolenItems = {
//   painting: 20000,
// } ➞ 20000

// const stolenItems = {} ➞ "Lucky you!"

function stolenFunc(obj, sum = 0) {
  //   for (const key in obj) {
  //     sum += obj[key];
  //   }
  //   if (sum <= 0) {
  //     return "Lucky you";
  //   } else {
  //     return sum;
  //   }

  let values = Object.values(obj);
  values.forEach((element) => {
    sum += element;
  });
  if (sum <= 0) {
    return "Lucky you";
  } else {
    return sum;
  }
}
console.log(stolenFunc({}));
