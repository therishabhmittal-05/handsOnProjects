const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
const mybtn = document.querySelectorAll(".button")
let myCount = document.querySelector(".count")
// console.log(decrease);
mybtn.addEventListener("click",function(myClick){
    console.log(myClick.target)
    if(myClick.target.id==decrease){
        myCount.textContent = Number(myCount.textContent)-1;
    }
})

console.log(Number(myCount.textContent)) 