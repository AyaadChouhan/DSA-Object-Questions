// How Good is Your Name?
// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

// const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
// "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
// "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
// "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
// Return your result as per the following rules:

// score <= 60:   "NOT TOO GOOD"

// 61 <= score <= 300:  "PRETTY GOOD"

// 301 <= score <= 599:  "VERY GOOD"

// score >= 600:  "THE BEST"
// Examples
// nameScore("MUBASHIR") ➞ "THE BEST"

// nameScore("YOU") ➞ "VERY GOOD"

// nameScore("MATT") ➞ "THE BEST"

// nameScore("PUBG") ➞ "NOT TOO GOOD"

function nameScore(val) {
  const scores = {
    A: 100,
    B: 14,
    C: 9,
    D: 28,
    E: 145,
    F: 12,
    G: 3,
    H: 10,
    I: 200,
    J: 100,
    K: 114,
    L: 100,
    M: 25,
    N: 450,
    O: 80,
    P: 2,
    Q: 12,
    R: 400,
    S: 113,
    T: 405,
    U: 11,
    V: 10,
    W: 10,
    X: 3,
    Y: 210,
    Z: 23,
  };
  let score = 0;
  let result = "";
  for (let i = 0; i < val.length; i++) {
    score += scores[val[i]];
  }

  if (score <= 60) {
    return "NOT TOO GOOD";
  } else if (score <= 300) {
    return "PRETTY GOOD";
  } else if (score <= 599) {
    return "VERY GOOD";
  } else if (score >= 600) {
    return "THE BEST";
  }
  
  //   switch (true) {
  //     case score <= 60:
  //       result = "NOT TOO GOOD";
  //       break;

  //     case  score <= 300:
  //       result = "PRETTY GOOD";
  //       break;

  //     case  score <= 599:
  //       result = "VERY GOOD";
  //       break;

  //     case score >= 600:
  //       result = "THE BEST";
  //       break;
  //   }
  //   console.log(result);
}
console.log(nameScore("MUBASHIR"));
