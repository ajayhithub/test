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


// str.substring(start,end)
// end index not include in string
console.log(sentence.substring(4,9)); // quick

// str.slice(start,end);  same as substring
// negative value can be use
console.log(sentence.slice(4,9));  // quick
console.log(sentence.slice(9,-8));   //     

// str.trim()
const sen = '   abcd  xyz    '
console.log(sen);
console.log(sen.trim());
console.log(sen.trimStart());
console.log(sen.trimEnd());

// str.replace()
const url = "https://abc.com/abhi%20dixit"
console.log(url.replace('%20','-'));

//  str.includes(substr)  substr is present or not
console.log(url.includes('abhi'));
console.log(url.includes('%20dixit'));
console.log(url.includes('dixita'));

// str.split(substr)
// str break into part base on substr
const str = "abc%vbn%fvhhbj%hgvyjhb%ppp%wert"
console.log(str.split('%')); // reture object




