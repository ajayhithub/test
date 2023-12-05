const div = document.querySelector('.time');
//console.log(div);
setInterval(()=>{
    let mydata = new Date();
    div.innerHTML = `${mydata.toLocaleTimeString()}`;
},1000);