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


Math Objects
 Math Objects in JS - is a built in object in JS that provides a 
         collection of properties and methods such as PI or E

let x = 3;
let y = 2;
let z = 1;

z = Math.round(x);

rounds down
z = Math.floor(x);

rounds up
z = Math.ceil(x);

eliminates the decimals
z = Math.trunc(x);

power
z = Math.pow(x,y);

square root
z = Math.sqrt(x);

logarithms
z = Math.log(x);

Sin
z = Math.sin(x);

Cos
z = Math.cos(x);

Tan
z = Math.tan(x);

Absolute Value, basically removing the -ve sign i guess
z = Math.abs(x);

sign of a variable, i.e the sign of the variable, 1 for +ve, 0 for 0 and -1 for -ve
z = Math.sign(x);

Maximum and minimum values
let max = Math.max(x,y,z);
let min = Math.min(x,y,z);



console.log(min);
*/

// Random Number Generator

//This displays Random numbers between 0 and 1
//let randomNum = Math.random();

//This displays Random numbers from 0 - 5 (0-1, 1-2, 2-3, 3-4, 4-5, 5-6)
//let randomNum = Math.random() * 6;


//This displays Random numbers from 0 - 6
//let randomNum = Math.floor(Math.random() * 6) + 1;


/*
const max = 100; and const min = 50;: 
These lines declare two constants, max and min, 
with values 100 and 50, respectively. These 
constants define the range within which you want 
to generate a random number.
*/
const max = 100;
const min = 50;

/*
let randomNum = Math.floor(Math.random() * (max - min)) + min;:

Math.random(): This function generates a floating-point 
random number between 0 (inclusive) and 1 (exclusive). 
So, Math.random() can generate values like 0.0, 0.1, 0.2, 
..., up to 0.9999... but never exactly 1.
(max - min): This calculates the difference
 between the max and min values, which defines the range of
  numbers from which you want to generate the random number.
Math.random() * (max - min): This expression generates a 
random number between 0 (inclusive) and the difference between max and min (exclusive).
Math.floor(...): This function rounds down the result of 
the multiplication to the nearest integer, ensuring you get an 
integer within the desired range.
+ min: This addition adjusts the generated random number 
to fall within the desired range defined by min and max. It shifts the 
range to start from min instead of 0.
*/
let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);