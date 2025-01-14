// const myFirstPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Hello world");
//         resolve()
//     }, 1000);
// });
// myFirstPromise
//   .then(() => {
//     console.log("your tast is complete");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
////

// const secPromise = new Promise(function (resolve, reject){
//     setTimeout( () =>{
//         resolve({name:"ayaad", faculty:"CS"})
//     }, 1000)
// })
// secPromise.then( (data) =>{
//     console.log(data.name);
// })
////

// const promiseThree = new Promise(function (resolve, reject) {
//   const error = false;
//   if (!error) {
//     return resolve({ name: "ayaad", faculty: "CS", id: "123" });
//   } else {
//     reject("ERROR something went wrong");
//   }
// });
// promiseThree
//   .then((user) => {
//     console.log(user.name);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("everything looks fine"));

/////

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const error = false;
//     if (!error) {
//       return resolve({ name: "ayaad", faculty: "CS", id: "123" });
//     } else {
//       reject("ERROR something went wrong");
//     }
//   }, 1000);
// });

// ============================================== async await exercise...
// async function consumePromise() {
//    try {
//     const response = await promiseFive;
//     console.log(response);
//    } catch (error) {
//     console.log(error)
//    }
// }
// consumePromise();

////

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const error = true;
//     if (!error) {
//       return resolve({ name: "ayaad", faculty: "CS", id: "123" });
//     } else {
//       reject("ERROR something went wrong");
//     }
//   }, 1000);
// });

// promiseFive
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
/////
// async function data() {
//   try {
//     const res = await fetch(
//       "https://github.com/typicode/json-server/blob/507878a406e4910efcb8ce17ab7fa0deb78148fa/package.json#L4"
//     );
//     const myData = await res.json();
//     console.log(myData);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// data();

/////

// fetch("https://github.com/typicode/json-server/blob/507878a406e4910efcb8ce17ab7fa0deb78148fa/package.json#L4")
// .then( (data) =>{
//     const newData = data.json()
//     return newData;
// }).then((value)=>{
//     console.log(value);
// }).catch( (error)=>{
//     console.log(error);
// })

// let newPro = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     // console.log("Hello world")
//     resolve();
//     reject("i got Error");
//   }, 2000);
// });
// newPro
//   .then(() => {
//     // console.log("tast is completed");
//   })
//   .catch((error) => {
//     console.log("error");
//   });

// =======================================================
// Async / await.
// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

// Async functions
// Let’s start with the async keyword. It can be placed before a function, like this:

// async function f() {
//   return 1;
// }

// The word “async” before a function means one simple thing: a function always returns a promise. 
// Other values are wrapped in a resolved promise automatically.
// async function num (){
//   return 1;
// }
// num().then(function (val) {
//   alert(val);
// }).catch( function(error){
//   alert(error);
// })

// ==================================================================

//===============================================================
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });
// myPromise
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(value * 2);
//       }, 1500);
//     });
//   })
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(value * 2);
//       }, 1500);
//     });
//   })
//   .then((val) => {
//     console.log(val);
//   });
// ===============================================

//==== its pending it is gave an error.................//
// function loadImg(src) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.onload(() => {
//       resolve(img);
//     });
//     img.onerror(reject);
//     img.src = src;
//   });
// }

// loadImg("https://petapixel.com/assets/uploads/2022/07/DALLEcopy.jpg").then( (val)=>{
//     console.log("image is loaded " + val);
// }).catch( (error)=>{
//     console.log(error + " Error laoding img");
// })

// Fetch...
// const fetchData = fetch(
//   "https://github.com/typicode/json-server/blob/507878a406e4910efcb8ce17ab7fa0deb78148fa/package.json#L4"
// );
// fetchData
//   .then((value) => {
//    return value.text();
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// fetch(
//   "https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=mralexgray&count=1"
// )
// .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((value) => {
//     document.write(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// new Promise((resolve, reject) => {
//   // resolve("hello");
//   reject("whoops");
// })
//   .then(() => {})
//   .catch(alert);

// new Promise((resolve, reject) => {
//   throw new Error("something is wrong");
// })
//   .catch(function (error) {
//     alert("The error is handled, continue normally");
//   })
//   .then(() => {
//     alert("every thing looks fine");
//   });

// let arr = ["ayaad", "khan", "hello"];
// let request = arr.map((el) => {
//   fetch(`https://api.github.com/users/${el}`);
// });
// Promise.all(request).then((responses) => {
//   for (let response of responses) {
//     console.log(`${response.url}: ${response.status}`);
//   }
//   return responses;
// });

// Promise.allSettled......
//  Q-4...Promise.allSettled(): Create three functions, each returning a Promise that resolves after a different delay (e.g., 1 second, 2 seconds, 3 seconds).
//  Use Promise.allSettled() to run all three Promises concurrently and log "All promises resolved!" when they all resolve.

// function pro1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello world");
//       reject("oops");
//     }, 1000);
//   });
// }
// function pro2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("oops");
//     }, 2000);
//   });
// }
// function pro3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello world");
//       reject("oops");
//     }, 3000);
//   });
// }
// Promise.allSettled([pro1(), pro2(), pro3()]).then((val) => {
//     val.forEach(element => {
//         if (element.status === "fulfilled") {
//             console.log("all okay");
//         } else if (element.status === "rejected"){
//             console.log("oops");
//         }
//     });
// }).catch( (error)=>{
//     alert(error)
// })

/////////////////////////////////
function pro1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Hello ayaad");
      reject("oops");
    }, 1000);
  });
}
function pro2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Hello world");
      reject("oops");
    }, 2000);
  });
}
function pro3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Hello world");
      reject("oops");
    }, 3000);
  });
}
Promise.any([pro1(), pro2(), pro3()]).then( (val)=>{
    console.log(val + " good");
}).catch( (error)=>{
    console.log(error);
})
