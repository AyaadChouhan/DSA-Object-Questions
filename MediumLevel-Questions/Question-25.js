// Burglary Series (06): Convert to Number
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.

// Examples
// convertToNumber({ piano: "200" }) ➞ { piano: 200 }

// convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }

// convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }

function convertToNumber(obj) {
    // for (const key in obj) {
    //     obj[key] = Number(obj[key])
    // }
    // return obj

    
    let keys = Object.keys(obj);
    const val = Object.values(obj);
    for (let i = 0; i < val.length; i++) {
        obj[keys[i]] = Number(val[i])        
    }
    return obj
}
console.log(convertToNumber({piano: "200", tv: "300", stereo: "400"}));