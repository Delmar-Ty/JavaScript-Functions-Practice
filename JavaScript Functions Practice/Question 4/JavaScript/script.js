//Starts the program by creating 3 variables and calling the first function
var value1;
var value2;
var value3;
getUserInput();

//Function to swap the values of 2 variables
function getUserInput() {
    alert("Enter 2 values");
    value1 = prompt("Enter a value >");
    value2 = prompt("Enter a value >");
    swap(value1,value2);
}

//Swaps the variables values
function swap() {
    value3 = value1;
    value1 = value2;
    value2 = value3;
    console.log("Var 1 = " + value1);
    console.log("Var 2 = " + value2);
    console.log("Var 3 = " + value3);
}