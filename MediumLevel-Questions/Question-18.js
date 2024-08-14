// Distance Between Two Points
// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

// Two points on a Cartesian plane

// Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.

// Examples
// getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

// getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

// getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095


function getDistance(a,b) {
    const xDiff = a.x - b.x;
    const yDiff = a.y - b.y;

    const sumofSquares = Math.pow(xDiff, 2) + Math.pow(yDiff, 2)
    const distance = Math.sqrt(sumofSquares);
  return  Math.round(distance * 1000) / 1000
}
let obj1 = {x: 10, y: -5};
let obj2 = {x: 8, y: 16};

console.log(getDistance(obj1, obj2));