// Video Streaming Plans
// Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

// BasicPlan	StandardPlan	PremiumPlan
// ✓	✓	✓	canStream
// ✓	✓	✓	canDownload
// ✓	✓	✓	hasSD
// ✓	✓	hasHD
// ✓	hasUHD
// 1	2	4	numOfDevices
// $8.99	$12.99	$15.99	price
// Examples
// BasicPlan.hasSD ➞ true

// PremiumPlan.hasSD ➞ true

// BasicPlan.hasUHD ➞ false

// BasicPlan.price ➞ '$8.99'

// PremiumPlan.numOfDevices ➞ 4
class BasicPlan {
  constructor(canStream, canDownload, hasSD, numOdDevices, price) {
    this.canStream = canStream;
    this.canDownload = canDownload;
    this.hasSD = hasSD;
    this.numOdDevices = numOdDevices;
    this.price = price;
  }
}

class StandardPlan extends BasicPlan {
  constructor(hasHD, numOdDevices, price) {
    this.hasHD = hasHD;
    this.numOdDevices = numOdDevices;
    this.price = price;
  }
}

class PremiumPlan extends StandardPlan {
  constructor(hasUHD, numOdDevices, price) {
    this.hasUHD = hasUHD;
    this.numOdDevices = numOdDevices;
    this.price = price;
  }
}

let basicplan = new BasicPlan(true, true, true, 1, "$8.99");
let standardPlan = new StandardPlan(true, 2, "$12.99");
let premiumPlan = new PremiumPlan(true, 4, "$15.99");
console.log(basicplan.hasSD);
console.log(standardPlan.hasUHD);
console.log(premiumPlan.price);




class data {


  #name = "";
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }
  print() {
    console.log("hi ayaad");
    return this.age;
  }
  #print2() {
    return this.#name;
  }
}
class data2 extends data {
  constructor(name, age) {
    super(name, age);
  }
  login() {
    console.log("hello world...");
    super.print();
  }
}
// const values = new data2("ayaad chouhan", 22);
// values.login();
