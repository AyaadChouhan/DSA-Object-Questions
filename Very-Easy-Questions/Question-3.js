// Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30



// function volumeOfBox(obj) {
//   let val = Object.values(obj);
//   //   return val.reduce( (acc, curr) => {
//   //     acc = acc * curr
//   //     return acc
//   //    }, 1)

//   let volumes = 1;
//   for (const key in obj) {
//     volumes *= obj[key];
//   }
//   return volumes;
// }

// class volumeOfBox{
//     constructor(obj){
//         this.width = obj.width 
//         this.length = obj.length 
//         this.height = obj.height 
//     }
//     multipleOfVolumes(){
//         return this.width * this.length * this.height
//     }
// }

function volumeOfBox(obj) {
    this.width = obj.width;
    this.length = obj.length;
    this.height = obj.height;
    volumeOfBox.prototype.multipleOfVolumes = () => {
        return this.width * this.length * this.height;
    }
    
}
let data = new volumeOfBox({ width: 2, length: 3, height: 5 });
console.log(data.multipleOfVolumes());
