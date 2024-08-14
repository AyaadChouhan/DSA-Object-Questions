// Burglary Series (08): Remove an Entry
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

// Examples
// removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate") ➞ { piano: 300, tv: 100 }

// removeEntry({ mirror: 500, painting: 1 }, "mirror") ➞ { painting: 1 }

// function removeEntry(obj, notStolenItem) {
//   let newObj = {};
//   for (const key in obj) {
//     if (key !== notStolenItem) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
// console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));
// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));

//========================
class removeEntry {
  constructor(obj, notStolenItem) {
    this.obj = obj;
    this.notStolenItem = notStolenItem;
  }

  print() {
    let obj = {};
    for (const key in this.obj) {
      if (key !== this.notStolenItem) {
        obj[key] = this.obj[key];
      }
    }
    return obj;
  }
}

let data = new removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate");
let data2 = new removeEntry({ mirror: 500, painting: 1 }, "mirror");
console.log(data.print())
console.log(data2.print())
