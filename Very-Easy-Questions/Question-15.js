// Burglary Series (07): Make a Copy
// Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.

// Examples
// { piano: 100, tv: 50 } ➞ { piano: 100, tv: 50 }

function CreateNewObj(obj) {

  // return {...obj}
  //=============================

  let newObj = {};
  //   for (const key in obj) {
  //     newObj[key] = obj[key];
  //   }
  //   newObj.tv = 47;
  //   return newObj;
  //=================================

  let myobj = Object.assign({}, obj);
  myobj.tv = 11;
  return obj;
  //==================================

  //   let str = JSON.parse(JSON.stringify(obj));
  //   str.tv = 12;
  //   return str;
  
}
console.log(CreateNewObj({ piano: 100, tv: 50 }));
