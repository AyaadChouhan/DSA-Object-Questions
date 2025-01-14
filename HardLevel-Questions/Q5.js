// Return the Most Expensive Piece of Jewellery
// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.

// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

// Examples
// mostExpensive ({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// }) ➞  "The most expensive one is the Pearl Necklace"

// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// // }) ➞ "The most e

function mostExpensive(obj) {
    let val = 0;
    let nameOfKey;
    for (const key in obj) {
        if (val < obj[key]) {
            val = obj[key]
            nameOfKey = key
        }
    }
    return `The most expensive one is the ${nameOfKey}`
}

console.log(mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  }))