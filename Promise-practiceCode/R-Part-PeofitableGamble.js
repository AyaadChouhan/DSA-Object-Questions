// function  profitableGamble(prob, prize, pay) {
//     return ((prob * prize) > pay) ? true : false ;
// }
// console.log(profitableGamble(9,9,34));

// let arr =  [10, 17, 32, 18];
// let arr = ["ayaad", "khan", "ahad"]
// let value = "ayaad";

// let check = arr.findIndex(check);
// console.log(check);

// async function names() {
//     console.log("hello world");
//     const data = setTimeout(() => {
//         console.log("promise resolved");
//     }, 1000);
//     await data;
//     console.log("ayaad chouhan");
// }
// names().then((result) => {
//     return (result)
// }).catch((err) => {
//     console.log(err);
// });
// console.log("hii");

// function fetchFunc(url) {
//     function inner() {
//         const fetchData = fetch(url);
//         let jsonData = fetchData.json();
//         fetchData.then((result) => {
//             console.log(result)
//         }).catch((err) => {
//             console.log(err);
//         });
//     }
//     return inner;
// }
// console.log(fetchFunc("https://jsonplaceholder.typicode.com/users"));
// async function fetchData(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }
// fetchData(`https://jsonplaceholder.typicode.com/users`);

// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((result) => {
//     result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// // let data = response.json();
// console.log(data);
// document.write("hello world")
// async function data(url) {
//    const fetchData = await fetch(url);
//    const resData = await fetchData.text();
//    return console.log(resData);
// }
// data(`https://jsonplaceholder.typicode.com/users`);

// function fetchData(url) {
//    const data = fetch(url)
//    data.then((result) => {
//       let myData = result.json();
//       console.log(myData);
//    }).catch((err) => {
//       console.log(err);
//    });
// }

// fetchData(`https://jsonplaceholder.typicode.com/users`)
// async function data(url) {
//    const mydata = await fetch(url);
//    const response = await mydata.text();
//    return response;
// }
// data(`https://jsonplaceholder.typicode.com/users`).then((result) => {
//    document.write(result);
// }).catch((err) => {
//    console.log(err);
// });


