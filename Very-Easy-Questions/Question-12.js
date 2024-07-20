// First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.

// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

function determineLever(arr) {
//   const levers = {
//     "first class lever": ["e", "f", "l"],
//     "second class lever": ["e", "l", "f"],
//     "third class lever": ["f", "e", "l"],
//   };

//   let keys = Object.keys(levers);

//   for (const key of keys) {
//     if (JSON.stringify(levers[key]) === JSON.stringify(arr)) {
//       return key;
//     }
//   }

//   return "invalid levers";

//===================================

// if (arr[0] === "e" && arr[1] === "f" && arr[2] === "l") {
//     return "first class lever"
// }
// else if (arr[0] === "e" && arr[1] === "l" && arr[2] === "l") {
//     return "second class lever"
// }
// else if (arr[0] === "f" && arr[1] === "e" && arr[2] === "l") {
//     return "third class lever"
// }


//===================================

switch (arr.join(",")) {
    case 'e,f,l':
        return "first class lever";
    case 'e,l,f':
        return "second class lever";
    case 'f,e,l':
        return "third class lever";

    default:
        break;
}
}

console.log(determineLever(["e", "f", "l"]));
