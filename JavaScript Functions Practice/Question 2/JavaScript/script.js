//Calls the first function to start the program
getUserNum();
var num1;
var num2;

//Gets user input
function getUserNum() {
    alert("Enter 2 numbers");
    num1 = prompt(">");
    num2 = prompt(">");
    alert(sum(num1, num2));
    alert(product(num1, num2));
    alert(remain(num1, num2));
}   

//Adds the 2 user numbers and returns to the function
function sum(x, y) {
    return parseFloat(x) + parseFloat(y);
}

//Multiplies the 2 user numbers and returns to the function
function product(a, b) {
    return parseFloat(a) * parseFloat(b); 
}

function remain(o, p) {
    return parseFloat(o) % parseFloat(p);
}