//Starts the program by calling the first function
var sel;
var userInput;
select();

//Asks the user for F or C and calls different function based on which was picked
function select() {
    sel = prompt("Enter F for fahrenheit temperature and C for celsius temperature");
    if (sel === "F") {
        userInput = prompt("Enter a temperature >");
        alert(cToF(userInput));
    } else if (sel === "C") {
        userInput = prompt("Enter a temperature >");
        alert(fToC(userInput));
    } else {   
        alert("Invalid Input");
    }
}

//Celsius to fahrenheit
function cToF(c) {
    return (9 / 5 * c) + 32;
}

//Fahrenheit to celsius
function fToC(f) {
    return 5 / 9 * (f - 32);
}