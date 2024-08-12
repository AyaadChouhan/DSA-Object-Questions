// Name Classes
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

// An attribute called fullname which returns the first and last names.
// An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.

// Examples
// a1 = new Name("john", "SMITH")
// a1.fname ➞ "John"

// a1.lname ➞ "Smith"

// a1.fullname ➞ "John Smith"

// a1.initials ➞ "J.S"

class Name{
    constructor(fname, lname){
        this.fname = fname.at(0).toUpperCase() + fname.slice(1).toLowerCase();
        this.lname = lname.at(0).toUpperCase() + lname.slice(1).toLowerCase();
        this.fullname =  this.fname + ' ' + this.lname;
        this.initals = this.fname[0] + '.' +  this.lname[0];
    }
}
let user = new Name("ayaad", "chouhan");
console.log(user.initals);
console.log(user.fname);
console.log(user.fullname);
