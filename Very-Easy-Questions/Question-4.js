// 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// class fiftyThirtyTwenty{
//     constructor(val){
//         this.val = val;
//     }
//     getValues(){
//         let obj = {};
//         obj.Needs = this.val * .50;
//         obj.Wants = this.val * .30;
//         obj.Savings = this.val * .20;
//         return obj
//     }
// }
// let data = new fiftyThirtyTwenty(13450);
// console.log(data.getValues());

function fiftyThirtyTwenty(val) {
  let obj = {};
  obj.Needs = val * 0.5;
  obj.Wants = val * 0.3;
  obj.Savings = val * 0.2;
  return obj
}
console.log(fiftyThirtyTwenty(13450));
