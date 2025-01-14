// Burglary Series (12): Get Vodka Bottle
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.

// Examples
// { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// // number = 100

// { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// // number = 50

// { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// // number = 70

function findDrink(obj, number) {
    for (const key in obj) {
        if (obj[key] === number) {
            return key
        }
    }
    return 'drink not found'
}
console.log(findDrink({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50))