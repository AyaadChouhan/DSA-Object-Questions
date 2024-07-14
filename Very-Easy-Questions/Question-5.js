// Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."

function relationToLuke(str) {
  let obj = {
    "Darth Vader": "father",
    Leia: "sister",
    Han: "brother in law",
    R2D2: "droid",
  };
  //   for (const key in obj) {
  //     if (key === str) {
  //         return `Luke, I am your ${obj[key]}`
  //     }
  //   }

  //   if (obj[str]) {
  //     return `Luke, I am your ${obj[str]}`;
  //   } else {
  //     return "no relation";
  //   }

  let value = Object.keys(obj).find(key => {
  return  key === str
  });
  if (value) {
    return `Luke, I am your ${obj[value]}`;
  }else{
    return "no relation"
  }
}
console.log(relationToLuke("Darth Vader"));
