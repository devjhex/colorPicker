const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let h = "#"

    for (let i = 0; i < 6; i++) {
        h+=hex[getRandomNumber()];
        
    }
     document.body.style.backgroundColor = h;
     color.textContent = h;

})

function getRandomNumber (){
    return Math.floor(Math.random()*hex.length);
}