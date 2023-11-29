// object literals  or non-singleton object
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


// singleton object
const newobj = new Object();

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};

// combine object
const objadd1 = Object.assign({},obj1, obj2,obj3); 
console.log(objadd1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
const objadd2 = {...obj1, ...obj2, ...obj3};
console.log(objadd2); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// get all keys
console.log(Object.keys(objadd2)); // [ '1', '2', '3', '4', '5', '6' ]
console.log(Object.values(objadd2)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// this property present or not
console.log(objadd1.hasOwnProperty("4")) // true
console.log(objadd1.hasOwnProperty("14")) // false


const obj9 = {
    name:"abhi",
    age: 19,
    location:"UP",
    email:"abhi@gmail.com",
    lastmonth: ["mon","sat"]
}

// object De-structure
const {name,age,location,email,lastmonth} = obj9;
console.log(name); // abhi
console.log(email);  // abhi@gmail.com
console.log(lastmonth);  // [ 'mon', 'sat' ]






























