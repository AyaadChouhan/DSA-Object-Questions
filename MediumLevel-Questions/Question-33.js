// Shopping for Memorial Day!
// Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.

// Examples
// checkout([
//   { desc: "potato chips", prc: 2, qty: 2, taxable: false },
//   { desc: "soda", prc: 3, qty: 2, taxable: false },
//   { desc: "paper plates", prc: 5, qty: 1, taxable: true }
// ]) ➞ 15.3

function checkout(arr) {
  let sum = 0;
  for (const el of arr) {
    if (el.taxable) {
      sum += ((el.prc * el.qty) / 100) * 6;
    } else {
      sum += el.prc * el.qty;
    }
  }
  return sum.toFixed(1);
}
console.log(
  checkout([
    { desc: "potato chips", prc: 2, qty: 2, taxable: false },
    { desc: "soda", prc: 3, qty: 2, taxable: false },
    { desc: "paper plates", prc: 5, qty: 1, taxable: true },
  ])
);
