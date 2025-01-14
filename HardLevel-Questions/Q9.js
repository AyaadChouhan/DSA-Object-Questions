// Burglary Series (16): Nested objects
// And who cursed the most in the fight between you and your spouse?

// Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most:

// If you, return "ME!"
// If your spouse, return "SPOUSE!"
// If a draw, return "DRAW!"
// Examples
// determineWhoCursedTheMost({
//   round1: {
//     me: 10,
//     spouse: 5,
//   },
//   round2: {
//     me: 5,
//     spouse: 10,
//   },
//   round3: {
//     me: 10,
//     spouse: 10,
//   },
// }) ➞ "DRAW!"

// determineWhoCursedTheMost({
//   round1: {
//     me: 40,
//     spouse: 5,
//   },
//   round2: {
//     me: 9,
//     spouse: 10,
//   },
//   round3: {
//     me: 9,
//     spouse: 10,
//   },
// }) ➞ "ME!"

// determineWhoCursedTheMost({
//   round1: {
//     me: 10,
//     spouse: 5,
//   },
//   round2: {
//     me: 9,
//     spouse: 44,
//   },
//   round3: {
//     me: 10,
//     spouse: 55,
//   },

function determineWhoCursedTheMost(obj) {
  let me = 0;
  let spouse = 0;

  //   for (const key in obj) {
  //         me += obj[key].me;
  //         spouse += obj[key].spouse;
  //   }


  let keys = Object.values(obj);
  for (let el of keys) {
    me += el.me;
    spouse += el.spouse;
  }

  if (me === spouse) {
    return "Draw!";
  } else if (me > spouse) {
    return "Me";
  } else {
    return "SPOUSE";
  }
  
}
console.log(
  determineWhoCursedTheMost({
    round1: {
      me: 10,
      spouse: 15,
    },
    round2: {
      me: 5,
      spouse: 10,
    },
    round3: {
      me: 10,
      spouse: 10,
    },
  })
);
