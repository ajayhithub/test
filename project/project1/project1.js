
const btn = document.querySelectorAll('.btn');

const body = document.querySelector('body');

const arr = Array.from(btn);  // html collection convert into array
// console.log(arr);
arr.forEach((val)=>{
        val.addEventListener('click',(e)=>{
           console.log(e.target);
           body.setAttribute('id',val.id)
         //console.log(val.id);
        })
})




