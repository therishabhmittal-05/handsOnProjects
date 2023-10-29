const myButton = document.querySelectorAll(".button");
const myBody = document.querySelector("body");

myButton.forEach(function(button){
    console.log(button);
    button.addEventListener("click", function(colorFlip){
        console.log(colorFlip.target)
        if(colorFlip.target.id==="white"){
            myBody.style.backgroundColor = "white"
        }
        if(colorFlip.target.id==="blue"){
            myBody.style.backgroundColor = colorFlip.target.id
        }
        if(colorFlip.target.id==="yellow"){
            myBody.style.backgroundColor = colorFlip.target.id
        }
        if(colorFlip.target.id==="green"){
            myBody.style.backgroundColor = colorFlip.target.id;
        }
        if(colorFlip.target.id==="red"){
            myBody.style.backgroundColor = colorFlip.target.id
        }
    })
})
