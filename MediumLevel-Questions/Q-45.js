// Leaderboard Sort
// Given an array of users, each defined by an object with the following properties: name, score, reputation create a function that sorts the array to form the correct leaderboard.

// The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their reputation in the community, so to get the trueScore, you should add the reputation multiplied by 2 to the score.

// Once you know the trueScore of each user, sort the array according to it in descending order.

// Examples
// leaderboards([
//   { name: "a", score: 100, reputation: 20 },
//   { name: "b", score: 90, reputation: 40 },
//   { name: "c", score: 115, reputation: 30 },
// ]) ➞ [
//   { name: "c", score: 115, reputation: 30 },  // trueScore = 175
//   { name: "b", score: 90, reputation: 40 },   // trueScore = 170
//   { name: "a", score: 100, reputation: 20 }   // trueScore = 140
// ]

function leaderboards(arr) {
  // let sort = arr.sort((a, b)=>{
  //     return ( b.score + (b.reputation * 2) ) - ( a.score + a.reputation * 2);
  // })
  // return sort
  // ======================================================

  for (let i = 0; i < arr.length; i++) {
    let trueScore = arr[i].score + arr[i].reputation * 2;

    for (let j = i; j < arr.length; j++) {
      let currTrueScore = arr[j].score + arr[j].reputation * 2;
      if (trueScore < currTrueScore) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(
  leaderboards([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ])
);
