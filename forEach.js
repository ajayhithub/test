const arr = ["js","c","c++","node","java","py"];

arr.forEach( function (val){
    console.log(val);
})

arr.forEach((val)=>{
    console.log(val);
})

function fun(val)
{
    console.log(val);
}
arr.forEach(fun);

// general syntex
// arr.forEach((val,ind,arr)=>{

// })

const arr1 = [1,2,3,4,5,6,7,8];

// filter    return array
const val = arr1.filter((num) => {

    return num>4;
})
console.log(val);

// map   return array
const val1 = arr1.map((val)=>{
 
       return val*10;
})
console.log(val1);

// reduce  







