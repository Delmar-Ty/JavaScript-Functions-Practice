//Preps the program by calling the first function and creating a variable
var userText;
getUserText();

//Propmts the user to enter text and calls the other functions
function getUserText() {
    userText = prompt("Enter Some Text >");
    stringLength(userText);
    makeUpperCase(userText);
    makeLowerCase(userText);
}


//String length function
function stringLength(a) {
    alert(a.length);
    console.log(a.length);
}


//String upper case function
function makeUpperCase(b) {
    alert(b.toUpperCase());
    console.log(b.toUpperCase());
}


//String lowre case function
function makeLowerCase(c) {
    alert(c.toLowerCase());
    console.log(c.toLowerCase());
}