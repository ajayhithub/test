let mydata = new Date(); // type object
 


console.log(mydata); //2023-11-29T06:44:08.073Z
console.log(mydata.toString());  // Wed Nov 29 2023 12:14:45 GMT+0530 (India Standard Time)
console.log(mydata.toDateString()); // Wed Nov 29 2023
console.log(mydata.toLocaleString()); //   29/11/2023, 12:17:48 pm


let time = Date.now();
console.log(time);  // return milisec  Ex = 1701240878633
console.log(Math.floor(time/1000)); //  convert into sec

console.log(mydata.getMonth());  // return into index 0,1,2,3,4,5,,,,11
console.log(mydata.getDate());    // return Ex 29

 