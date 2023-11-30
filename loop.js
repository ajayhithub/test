// for of
const arr = [1,2,3,4,5,6];
for(const it of arr)
{
    console.log(it);
}

const str = "hellow world";
for(const it of str)
{
    console.log(it);
}

// Map
const map = new Map();
map.set('a',1);
map.set('b',2);
map.set('c',3);
map.set('d',4);
map.set('f',6);
for(const [key,value] of map)
{
    console.log(`${key}=====${value}`);
}



// object   {for in} loop give key or index (for array)
const obj = {
    name: "ajay",
    class: "A",
    sec: "B",
    pro: "c++"
}
for(const it in obj)
{
    console.log(`${it} ==== ${obj[it]}`);
}






