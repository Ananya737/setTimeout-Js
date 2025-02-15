
//setTimeout parameter mai do cheezein leta hai: 1)  function
                                            //   2)  delay

// let show=document.querySelector("#show");
let show1=document.querySelector("#show1");


// let runn=()=>{
//     setTimeout(()=>{
//    show.innerHTML= "Hello,I am Ananya!";
//     },4000)
// }



//setInterval 
let a= document.querySelector("#stopwatch").value
let inter;
let count=a;
let run1=()=>{
    
  inter=  setInterval(()=>{
   show1.innerHTML = count;
   count--;

    },1000)
}

let stop=()=>{
    clearInterval(inter);
}
