let num1 = +prompt("Enter the first number");
let num2 = +prompt("Enter the second number");
let num3 = +prompt("Enter the third number");
let num4 = +prompt("Enter the fourth number");
let num5 = +prompt("Enter the fifth number");

let largerNumber = num1;

if(num2 > largerNumber){
    largerNumber = num2;
}
if(num3 > largerNumber){
    largerNumber = num3;
}
if(num4 > largerNumber){
    largerNumber = num4;
}
if(num5 > largerNumber){
    largerNumber = num5;
}
console.log("The larger number is " + largerNumber);