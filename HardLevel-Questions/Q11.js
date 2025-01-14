// class Generate {
//   constructor(name, age) {
//       this.name = name
//       this.age = age
//   }

//   getName(){
//       console.log(this.name);

//       return () => {
//           return this.age
//       }
//   }
// }

// let user1 = new Generate("Mahir", 17)
// // console.log(user1);
// let func = user1.getName()
// func()



// //

// // this keyword
// //arrow fiunction and regular function
// //generator func 
// // iterator
// // boxing
// // problem solving issues
// //spread oper and rest para


// async function PromFunc(url) {
//   let res = await  fetch(url)
//   let data = res.json()
//   return data
  
// }


var isValid = function(s) {
  let arr = ['[]', '{}', '[]', '()']
  let isValid = true
  for (let i = 0; i < arr.length; i++) {
    console.log(s[i])
    if (arr[i] === s[i] && a === s.length - 1) {
      
    }
    
  }
};
console.log(isValid("()"))