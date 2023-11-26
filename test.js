const a = 1234;
//console.log(a);

// const  value never change 
// a = 22222;
// console.log("ajay");



//let is a define in scope
let b = "ahahah";
{
    b = "123";
    console.log(b);    // value 123
}
console.log(b);  // value 123

{
    let bb = "123";
    console.log(bb);    // value 123
}
//console.log(bb);  // error b is not define
 
 let bbb = "qqq"; 
{
    let bbb = "aaa";
    console.log(bbb);    // value aaa
}
console.log(bbb);  // value qqq






// var is funtion variable
var c = "456";

// without any datatype it will work 
xyz = "qirgai";
console.log(xyz); 
