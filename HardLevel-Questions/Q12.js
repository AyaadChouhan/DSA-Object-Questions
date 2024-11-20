// // Calculate Next Position of One Point Moving Towards Another
// // A point on the screen (pt1) wants to move a certain distance (dist) closer to another point on the screen (pt2) The function has three arguments, two of which are objects with x & y values, and the third being the distance, e.g. {x:50, y:60}, {x: 100, y: 100}, 10. The expected result is a similar object with the new co-ordinate.

// // Examples
// // getNextPosition({x: 50, y: 60}, {x: 100, y: 100}, 10) ➞ {x: 58, y: 66}

// // getNextPosition({x: 0, y: 0}, {x: 100, y: 0}, 10) ➞ {x: 10, y: 0}

// // getNextPosition({x: 0, y: 0}, {x: 100, y: 100}, 10) ➞ {x: 7, y: 7}

// // getNextPosition({x: 250, y: 10}, {x: -20, y: 35}, 55) ➞ {x: 195, y: 15}

// function getNextPosition(params) {

// }

// 25% Discount on the Most Expensive Item
// You want to introduce a discount for your online store. Every customer gets a 25% discount on the most expensive item in the shopping cart. The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.

// Create a function that takes an object and returns the total price after discount.

// Examples
// twentyFiveOnOne([
//   { name: "Iphone 20x", quantity: 1, price: 1350 },
//   { name: "Samsung x30", quantity: 1, price: 1225 },
//   { name: "Nokia 9250", quantity: 1, price: 800 },
//   { name: "Tesla Model Y", quantity: 1, price: 72999 }
// ]) ➞ 58124.25

// twentyFiveOnOne([
//   { name: "jogging pants", quantity: 1, price: 29.99 },
//   { name: "tennis socks", quantity: 2, price: 5.99 },
//   { name: "sweat shirt", quantity: 1, price: 59.99 }
// ]) ➞ 86.96

function twentyFiveOnOne(arr) {
  let maxPrice = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].price * arr[i].quantity;
    if (maxPrice < arr[i].price) {
      maxPrice = arr[i].price;
    }
  }

  let discount = maxPrice * 0.25;
  let result = total - discount;
  return result.toFixed(2);
}

console.log(
  twentyFiveOnOne([
    { name: "jogging pants", quantity: 1, price: 29.99 },
    { name: "tennis socks", quantity: 2, price: 5.99 },
    { name: "sweat shirt", quantity: 1, price: 59.99 },
  ])
);

console.log(
  twentyFiveOnOne([
    { name: "Iphone 20x", quantity: 1, price: 1350 },
    { name: "Samsung x30", quantity: 1, price: 1225 },
    { name: "Nokia 9250", quantity: 1, price: 800 },
    { name: "Tesla Model Y", quantity: 1, price: 72999 },
  ])
);
