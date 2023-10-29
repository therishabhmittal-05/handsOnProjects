const hexValue = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const color = document.querySelector(".colorValue")
const myButton = document.querySelector(".btn")
myButton.addEventListener('click',function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor+= hexValue[randomNumber()];
    }
    document.body.style.backgroundColor= hexColor;
    color.textContent = hexColor;
})
function randomNumber(){
    return Math.floor(Math.random() * hexValue.length)
}