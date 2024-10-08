// Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

// class cityFacts {
//   constructor(obj) {
//     this.name = obj.name;
//     this.population = obj.population;
//     this.continent = obj.continent;
//   }

//   printDetails() {
//     return `${this.name} has a population of ${this.population} and is situated in ${this.continent}`;
//   }
// }

function cityFacts({ name, population, continent }) {
  return `${name} has a population of ${population} and is situated in ${continent}`;
}
const facts = cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia",
});

console.log(facts);
