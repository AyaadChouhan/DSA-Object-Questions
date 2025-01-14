// Circle Constructor
// Create a Circle() constructor that takes the radius as a single argument and has the following properties and methods:

// .radius
// .diameter
// .getC() (get circumference)
// .getA() (get area)
// Instantiate this constructor with two circles:

// c1 has radius 3
// c2 has radius 5
// For example, if I used the Circle constructor to instantiate a new instance called c0 with a radius of 1, I would have:

// Examples
// c0.radius ➞ 1

// c0.diameter ➞ 2

// c0.getC() ➞ 6.28

function Circle(radius) {
  this.radius = radius;
  this.diameter = radius * 2;

  this.getC = function () {
    return Math.round(2 * Math.PI * this.radius);
  };
  this.getA = function () {
    return Math.round(Math.PI * this.radius ** 2) / 100;
  };
}

const c0 = new Circle(3);
console.log(c0.getC());
console.log(c0.getA());
