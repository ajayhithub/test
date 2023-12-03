const aa = Object.getOwnPropertyDescriptor(Math,"PI");

console.log(aa);      /*{ value: 3.141592653589793,
                       writable: false,
                       enumerable: false,
                        configurable: false
                        } */  

const obj = {
    name:"chai",
    price:"290",
}

console.log(Object.getOwnPropertyDescriptor(obj,"name"));   
                                 /*{ 
                                     value: 'chai',
                                     writable: true,
                                     enumerable: true,
                                     configurable: true } */
 
// make property unchange 
// name value now change
Object.defineProperty(obj,'name',{
     writable: false,  // for stop write value which change
     enumerable: false,   // to control itrate  
     configurable: false
})





