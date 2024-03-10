/*

DAY 1

console.log("Hello");
console.log("I like Food");
window.alert("Wsg Bro");
window.alert("Wsg Bro");


Variables
let firstName = "Inmi"
let age = 17;
let lastName = "Akoh"
let student = false;

document.getElementById("p1").textContent = `My Name is ${firstName} and I am ${age} years old, But am I a Student?: ${student}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = student;


Arithmetic Operators
student = 30;

student = student +1;
student = student -1;
student = student 2;

Augumented Assignment operators
student += 1;
student -= 1;
student = 2;

This is the Increment It adds One to the Number
student++;
This is the decrement It removes One to the Number
student--;


console.log(student);


    Operator Precedence from Left to Right
    1. Bracket ()
    2. Exponents 
    3. multiplication , division , modulo %
    4. addition +, and Subtraction -


let result = 1 + 2  3 + 4 2;

console.log(result);






 How to get user Input,

Easy Way window.prompt
let username = window.prompt("What's Your Name");

console.log(username); 

complex way 
    HTML
    <h1 id="myH1">Welcome<h1>
    <label for="myText">username: <label>
    <input id="myText"><br><br>
    <button id="mySubmit">submit<button>

let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById('myText').value;

    console.log(username);
} 

let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
} 






Type Conversion - changing the datatype of a variable from one to another
                  (String -> Number -> Booloean)

 let age = window.prompt("How old are you");
This converts the string from the user input to a Number Datatype
age = Number(age);
age +=1;
console.log(age, typeof  age); 

let x = "Pizza";
let y = "Pizza";
let z = "Pizza";


let x = 0;
let y = 0;
let z = 0;

x = Number(x);
y = String(y);
z = Boolean (z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



CONSTANTS
 Consts are Variables that cannot be changed, with const, variables will not change if called or changed in future

 const PI = 3.14159;
  let radius;
  let circumference;





 document.getElementById("mySubmit").onclick = function(){
     radius = document.getElementById("myText").value;
     radius = Number(radius);
     circumference = 2 * PI * radius;
     document.getElementById("myH3").textContent = circumference + "cm";


    
 }

html for the constant task
{ <h1 id="myH1">Enter a radius<h1>
    <label for="myText">Radius: <label>
    <input type="text", id="myText"><br><br>
    <button id="mySubmit">Submit<button>
    <h3 id="myH3"><h3> }


DAY 2

//counter program
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

*/
