const num = 400;
const numb = new Number(100);

// convert into string 
console.log(numb.toString());

// numb.toFixed(num)
console.log(numb.toFixed(2)); // 100.00
console.log(numb.toFixed(4)); // 100.0000

// num1.toPrecision(num)
const num1 = 123.986
console.log(num1.toPrecision(4)); // 124.0
console.log(num1.toPrecision(3));//  124
console.log(num1.toPrecision(2)); //  1.2e+2

// num2.toLocaleString()
const num2 = 10000000;
console.log(num2.toLocaleString());   //1,00,00,000
console.log(num2.toLocaleString('en-IN')); //1,00,00,000



//       ++++++++++++ Math ++++++++++

console.log(Math); // object
console.log(Math.abs(-132)); // 132
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,3,5,9,6)); // 3
console.log(Math.max(4,3,5,9,6)); // 9

// get value between 0.00000 to 1.0000000
console.log(Math.random());   

// get value between 1.00000 to 10.0000000
console.log((Math.random()*10) + 1);   
// get value between 1.000000 to 100.000000
console.log((Math.random()*100) + 1);  

// get value between 10 to 20
console.log(Math.floor(Math.random()*(20-10 + 1))+10);