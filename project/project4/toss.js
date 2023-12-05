const coin = document.querySelector('.coin');
//console.log(coin);
const result = document.querySelector('.result');
//console.log(result);
coin.addEventListener('click',()=>{
      
   const num =Math.round(Math.random()*100);
//    console.log(num);
    result.innerHTML = `?`; 
    coin.setAttribute('class','coin1'); 
    setTimeout(()=>{
        if(num%2 === 0)
        {
        // console.log(result.innerHTML); 
         result.innerHTML = `head`;
        }
        else
        {
       // console.log(result.innerHTML); 
        result.innerHTML = `tail`;
        }
        coin.setAttribute('class','coin');
    },2000)
    
})
