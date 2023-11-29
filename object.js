// object literals
const mysym = Symbol("key1");

const obj = {
    name:"abhi",
    age: 19,
    [mysym]: "myKey1",
    location:"UP",
    email:"abhi@gmail.com",
    lastmonth: ["mon","sat"]
}
console.log(obj.email); // abhi@gmail.com
console.log(obj["email"]);  // abhi@gmail.com
console.log(obj[mysym]);  // myKey1

// change value
obj.name = "dixit";

// obj value not updata
Object.freeze(obj);

























