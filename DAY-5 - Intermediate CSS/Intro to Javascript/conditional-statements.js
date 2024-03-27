//Control Flow Structures
// 1. Conditional Statements
// 2. Looping Statements

// Conditional Statements - allows us to execute different blocks of codes based on a condition

// if statment
let age = 2;

if (age >= 18) {
    console.log("You are eligible to vote")
} else{
    console.log("You are not eligible to vote!")
}

// if else-if else statement
// You can set multiple conditions
let temperature = 25;
if (temperature < 0) {
    console.log("It is freezing")
} else if(temperature >=0 && temperature < 20) {
    console.log("It is cool outside")
} else {
    console.log("It is a warm day!")
}

//Switch statement
let day = "Monday";

switch (day) {
    case 'Monday':
        console.log("It is the start of the week!");
        break;
    case 'Friday':
        console.log("It is the end of the week");
        break;
    default:
        console.log("It is a regular day");
        break;
    }
