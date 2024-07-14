// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// function getVoteCount(obj) {
//     let val = Object.values(obj)
// //    return val[0] - val[1]
// return obj.upvotes - obj.downvotes
// }

// let getVoteCount = ({upvotes, downvotes}) => {
//     return upvotes - downvotes
// }

class getVoteCount{
    constructor(obj){
        this.upvotes = obj.upvotes
        this.downvotes = obj.downvotes
    }
    print(){
        return this.upvotes - this.downvotes;
    }
}
const data = new getVoteCount({ upvotes: 132, downvotes: 132 });
const data2 = new getVoteCount({ upvotes: 2, downvotes: 33 });
console.log(data2.print());
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));

