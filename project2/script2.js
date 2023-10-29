const clickMe = document.querySelector(".btn")
const colorval = document.querySelector(".colorValue")
// console.log(clickMe)
const colors = ["grey", 'red',"blue"]
clickMe.addEventListener('click',function(){
    const valueObtained = randomNumber();
    document.body.style.backgroundColor=colors[valueObtained];
    colorval.innerHTML=colors[valueObtained]
})
function randomNumber(){
    return Math.floor(Math.random()*colors.length)
}