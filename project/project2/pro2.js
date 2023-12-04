const form = document.querySelector('form');
const box1 = document.querySelector('.box1');
let w;
let h;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    w = document.querySelector('#height').value;
    h = document.querySelector('#weight').value;
   // console.log(typeof w);
    if(w === ''|| h === '')
    {
   // const div = document.createElement('div');
    box1.innerHTML = "please fill the data";
   // box1.appendChild(div);
    }
    else{
    //const div = document.createElement('div');
    const val = Math.round(10000*w/(h*h));
    if(val<=18.4)
    {
        box1.innerHTML = `your BMI is ${val}  it is Underweight`;
       // box1.appendChild(div);
    }
    else if(val<=24.9)
    {
        box1.innerHTML = `your BMI is ${val}  it is Normal`;
       // box1.appendChild(div);
    }
    else if(val<=39.9)
    {
        box1.innerHTML = `your BMI is ${val}  it is Overweight`;
       // box1.appendChild(div);
    }
    else
    {
        box1.innerHTML = `your BMI is ${val}  it is Obese`;
       // box1.appendChild(div); 
    }
    }

    form.reset();  //  reset form
  //  location.reload()// reload page
})


