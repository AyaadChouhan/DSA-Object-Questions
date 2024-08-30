// Expensive Orders
// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

// Examples
// expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }

// expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
// ➞ { "Gucci Fur": 24600 }

// expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
// ➞ {}

function expensiveOrders(obj, cost) {
  let newObj = {};
  // for (const val in obj) {
  //    if (obj[val] >= cost) {
  //     newObj[val] = obj[val]
  //    }
  // }
  // return newObj

  //==============================

  let val = Object.keys(obj);
  return val.reduce((acc, curr) => {
    if (obj[curr] > cost) {
      acc[curr] = obj[curr];
    }
    return acc;
  }, {});
}
console.log(
  expensiveOrders(
    {
      "Gucci Fur": 24600,
      "Teak Dining Table": 3200,
      "Louis Vutton Bag": 5550,
      "Dolce Gabana Heels": 4000,
    },
    20000
  )
);
console.log(expensiveOrders({ a: 3000, b: 200, c: 1050 }, 1000));
