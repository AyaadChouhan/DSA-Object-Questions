// Count Number of Instances
// Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.

// Examples
// u1 = new User("johnsmith10")
// User.userCount ➞ 1

// u2 = new User("marysue1989")
// User.userCount ➞ 2

// u3 = new User("milan_rodrick")
// User.userCount ➞ 3
// Make sure that the usernames are accessible via the instance attribute username.

// u1.username ➞ "johnsmith10"

// u2.username ➞ "marysue1989"

// u3.username ➞ "milan_rodrick"

class User{
    constructor(val){
        this.count = 0
        this.val = val
    }
    username(){
        return this.val;
    }
    userCount(){
        this.count++
        return this.count
    }
}
const u1 = new User("johnsmith10");
console.log(u1.userCount())
console.log(u1.userCount())
console.log(u1.userCount())