// Online Shopping
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// Examples
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false

// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true

// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true

function freeShipping(obj, total = 0) {
  const eligibleForshipping = 50;

  // for (const key in obj) {
  //     total += obj[key]
  // }
  // return (total >= eligibleForshipping) ? true : false

  let val = Object.values(obj);
  let outputs = val.reduce((acc, curr) => {y
    acc += curr;
    return acc;
  }, 0);
  return outputs >= eligibleForshipping;
}
console.log(
  freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
);
console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
