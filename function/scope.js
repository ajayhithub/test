var c = 300;
if(true)
{
    let a = 10;
    const b = 20;
    var  c = 30;
}
// console.log(a); // a not define
// console.log(b); // b not define
console.log(c); // 30

console.log(abc(5)); // 6
function abc(num){
    return num+1;
}

console.log(xyz(5)); // Cannot access 'xyz' before initialization
const xyz = function(num){
    return num+1;
}


// arrow funtion
 const add1 = (a,b)=>{
      return a+b;
 }
 console.log(add1(2,8));// 10

 // not need to write return by default return present
 const add2 = (a,b) => (a+b);  
 console.log(add2(2,8));  // 10

 const add3 = (a,b) => a+b;
 console.log(add3(2,8));   // 10










