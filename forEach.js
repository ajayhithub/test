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


