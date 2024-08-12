// Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

// Examples
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }

// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }

// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }



function mapping(arr) {
    const obj = {};

    const map = new Map();
    arr.forEach(element => {
        map.set(element, element.toUpperCase())
    });
    return Object.fromEntries(map)
    
    // let map =  arr.map((el)=>{
    //       return[ el, el.toUpperCase() ]
    //   });
    // return Object.fromEntries(map);

    // for (const element of arr) {
    //     obj[element] = element.toUpperCase();
    // }

    arr.forEach(el => {
        let val = el.toUpperCase();
     return  obj[el] = val;
    });

   
    return obj
}
console.log(mapping(["a", "v", "y", "z"]));