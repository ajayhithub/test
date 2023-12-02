// create promises (promises is object)
const promisesOne = new Promise(function(res,rej){
    // Do an asyn task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("asyn task complete");
        res("ajay");
    },2000)
})

// promises consumed
// .then have function it is call by res(); you can pass value in res(value);
promisesOne.then(function(val){
    console.log(`promises consumed ${val}`);
})



new Promise(function(res,rej){
    setTimeout(function(){
        console.log("asyn task complete");
        res("hellow");
    },2000)
}).then(function(val){
    console.log(`promises consumed ${val}`);
})


const promisestwo = new Promise(function(res,rej){
    setTimeout(function(){
        let error = true;
        if(error) {
        console.log("asyn task complete");
        res({name:"ajay", password:"1234"});
        }
        else{
            rej("error");
        }
    },2000)
})


//function in .catch() it is call by rej(); 
promisestwo.then((user)=>{
          console.log(user);
          return user.name; // this return ka data next .then() ke function me jata hai
}).then((val)=>{
    console.log(val);   // ajay
}).catch((val)=>{
     console.log(val);  
})

// promisestwo me res(val) val goto try{ res = val}
// promisestwo me rej(val)  val goto catch(error){ error = val }
async function fun1(){
    try{
     const res = await  promisestwo;
     console.log(res);

    } catch(error){
      console.log(error);
    }
}
fun1();



async function fun12(){
    try{
     const res = await fetch('https://sjjhfsjsfksf.fhskfh.');
     console.log(res);
     const data = await res.json();
     console.log(data);
    } catch(error){
      console.log(error);
    }
}
fun2();





