function addnum(num)
{
    return num;
}

console.log(addnum(200));  // 200
console.log(addnum(300,400,500,200)); // 300

function addnum1(...num)
{
    return num;
}

console.log(addnum1(200));  // [200]
console.log(addnum1(300,400,500,200)); // [ 300, 400, 500, 200 ]

function addnum2(val1,val2, ...num)
{
    return num;
}

console.log(addnum2(200));  // []
console.log(addnum2(300,400,500,200)); // [ 500, 200 ]













