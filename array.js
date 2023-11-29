 // multipal datatype can be store
 const arr = [0 , 12 , 23.9 , "asd", ["as",1,89]];   // type object
const arr2 = new Array(1,2,3,5, "1234"); // type object

 console.log(arr[2]); // 23.9
 console.log(arr[3]); // asd
 console.log(arr[4]);  // ["as",1,89]
 console.log(arr2[4]);  // 1234 

// Methods

arr.push(89); // add element at end
console.log(arr); 
arr.pop(); // element remove from end


arr.unshift(9);  // add element at start
console.log(arr);  
arr.shift()  // element remove from start

// element present or not
console.log(arr.includes("asd")); // true
console.log(arr.includes(13)); // false

// return index of element it is present otherwise return -1
console.log(arr.indexOf("asd"));  // 3  index
console.log(arr.indexOf("asdu"));  // -1 

// array convert into string
const arr3 = arr.join();
console.log(arr3);     // 0,12,23.9,asd,as,1,89
console.log(typeof arr3); // string


const newarr1 = arr.slice(1,4);  // return subarray  end index not include
console.log(newarr1);   //   
 

// splice method change orginal array 
const newarr2 = arr.splice(1,4);    // return subarray 
console.log(newarr2);   // 
console.log(arr);

const marval = [0,2,4,6,8];
const dc = [1,3,5,7,9];
const xman = [12, 23, 45, 78];


const add = marval.concat(dc);
console.log(add);  // [0, 2, 4, 6, 8, 1, 3, 5, 7, 9 ]

const add1 = [...marval, ...dc, ...xman];
console.log(add1);    // [ 0,  2, 4, 6,  8,  1, 3,  5, 7, 9, 12, 23, 45, 78]


marval.push(dc)
console.log(marval); // [ 0, 2, 4, 6, 8, [ 1, 3, 5, 7, 9 ] ]


const arr5 = [1,2,[3,4,5],[6,[7,8],9]];
const arr7 = arr5.flat(Infinity);
console.log(arr7); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// return true  or   false
console.log(Array.isArray("asdfghjk"));

// convert into array  if not convert then return [] (empty array)
console.log(Array.from('asdfghjk')); // ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k']

let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a,b,c));  // [ 100, 200, 300 ]


