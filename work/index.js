// Random number generator

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");
const max = 6;
const min = 1;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1
    myLabel2.textContent = randomNum2
    myLabel3.textContent = randomNum3
}

