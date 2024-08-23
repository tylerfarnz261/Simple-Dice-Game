var number1 = Math.floor((Math.random()*6)+1)
var number2 = Math.floor((Math.random()*6)+1)

filePath1="./images/dice"+number1+".png";
filePath2="./images/dice"+number2+".png";

if (number1===number2){
    document.querySelector("h1").textContent="It's a tie!"
}
else if (number1>number2) {
    document.querySelector("h1").textContent="Player 1 Wins"
}
else{
    document.querySelector("h1").textContent="Player 2 Wins"
}


document.querySelectorAll("img")[0].setAttribute("src",filePath1);
document.querySelectorAll("img")[1].setAttribute("src",filePath2);
