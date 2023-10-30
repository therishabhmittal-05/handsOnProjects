const mybtn = document.querySelectorAll(".button");
let myCount = document.querySelector(".count");
let count = 0;
const hexValue = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

mybtn.forEach(function (myButton) {
    myButton.addEventListener("click", function (btn) {
        console.log(btn)
        if (btn.target.id === "increase") {
            count += 1;
        }
        if (btn.target.id === "decrease") {
            count -= 1;
        }
        if (btn.target.id === "reset") {
            count = 0;
        }
        myCount.textContent = count;
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
        hexColor+= hexValue[randomNumber()];
    }
        document.body.style.backgroundColor= hexColor;
})

    })  
function randomNumber(){
    return Math.floor(Math.random() * hexValue.length)
}