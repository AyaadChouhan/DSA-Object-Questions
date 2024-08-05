// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
// let circy = new Circle(11)
// circy.getArea()

// Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// Should return 27.897342763877365

class makeCircle {
  constructor(val) {
    this.radius = val;
  }
  getArea() {
    const pi = Math.PI;
    return pi * this.radius * this.radius;
  }
  getPerimeter() {
    const pi = Math.PI;
    return 2 * pi * this.radius;
  }
}
// const value = new makeCircle(11);
// const value2 = new makeCircle(4.44);
// console.log(value.getArea());
// console.log(value2.getPerimeter());

function circle(val) {
  this.val = val;
}
circle.prototype.getArea = function () {
  const pi = Math.PI;
  return pi * this.val * this.val;
};
circle.prototype.getPerimeter = function () {
  const pi = Math.PI;
  return 2 * pi * this.val;
};
let data = new circle(4.44);
console.log(data.getPerimeter());
