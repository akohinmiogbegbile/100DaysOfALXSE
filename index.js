// Consts are Variables that cannot be changed, with const, variables will not change if called or changed in future

const PI = 3.1459;
 let radius;
 let circumference;





document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";


    
}