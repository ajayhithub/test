const name = "ajay"
const cnt = 50

console.log(`hello my name ${name} and cnt is ${cnt}`); 

const game = new String('ajay');

// string method
// str.at(i);  i=0,1,2,3,,, or -1,-2,-3,,,  return string
// i value out of range return undefined
const sentence = 'The quick brown fox jumps over the lazy dog';

console.log(`${sentence.at(0)}  ${sentence.at(1)}  ${sentence.at(-1)}  ${sentence.at(-3)}`); // T h g d
console.log(typeof sentence.at(0)); // string

// str.charAt(i);  i=0,1,2,3,3,,, not use negative
// return string 

// str.includes(str1)  return true or false
// string is present return true otherwise false
console.log(sentence.includes('fox')); // true

console.log(sentence.includes('fox',2));  // true

// str.indexOf(str) return index of fisrt occur
// string not present return -1
console.log(sentence.indexOf('fox'));   // 16
console.log(sentence.indexOf('fox',9));   // 16



     








