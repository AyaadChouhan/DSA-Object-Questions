// Burglary Series (04): Add its Name
// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

function addName(obj, name, val) {
    
  //    obj[name] = val
  //    return obj

  //===============================

  let assignObj = Object.assign(obj, { [name]: val });
  return assignObj;
}
console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));