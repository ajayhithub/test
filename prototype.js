// create prototype (method) on Object
// method access in array , string object ect
Object.prototype.xyz = function(){
    console.log("add prototype  ");
}

let arr = ["thor", "ironman"];
let str = "spiderman";

console.log(`${arr[0].xyz()} thor`);
console.log(`${arr[1].xyz()} ironman`);
console.log(`${str.xyz()} spiderman`);
 


// const oj1 = {
//     name:"asdf"
// }
// const oj2 = {
//     cash:500
// }
// // obj1 can access property of obj2
// Object.setPrototypeOf(obj1,obj2);


// make method return length of string with remove space
let str1 = "sfdfrt    ";

String.prototype.len = function(){
      console.log(this);  
    console.log(`true length ${this.trim().length}`);
}

str1.len();