// Hall Monitor 2
// A floor plan is arranged as follows:

// You may freely move between rooms 1 and 2.
// You may freely move between rooms 3 and 4.
// However, you can enter the hallway to move between rooms 2 and 4.
// Floor Plan

// Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".

// Examples
// possiblePath([1, 2, "H", 4, 3]) ➞ true

// possiblePath(["H", 1, 2]) ➞ false

// possiblePath([4, 3, 4, "H", 4, "H"]) ➞ true
//   const firstRow = [1, 2];
//   const secRow = [1, 2];

function possiblePath(arr) {
  const connection = {
    1: [2],
    2: [1, "H"],
    H: [2, 4],
    3: [4],
    4: [3, "H"],
  };

  const row = [1, 2, "H", 4, 3];

  for (let i = 0; i < arr.length - 1; i++) {
    const currentIndex = row.indexOf(arr[i]);
    const nextIndex = row.indexOf(arr[i + 1]);
    if (Math.abs(currentIndex - nextIndex) !== 1) {
      return false;
    }
  }
  return true;

  // ===================================================================
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (!connection[arr[i]] || !connection[arr[i]].includes(arr[i + 1])) {
  //       return false;
  //     }
  //   }
  //   return true;
}
console.log(possiblePath([4, 3, 4, "H", 4, "H"]));
console.log(possiblePath(["H", 1, 2]));
