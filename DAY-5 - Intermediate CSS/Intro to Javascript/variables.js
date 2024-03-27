let firstName = "John"; //let - block-level scope
firstName = "Jane"

console.log("Hello!", firstName)



// Guideline for creating variable names:
// 1.  Should be meaningful and descriptive
// 2.  Should not start with a number
// 3.  Should not contain a space or hyphen
// 4.  Case-Sensitive
// 5.  Cannot use reserved keywords

// var variable - global level scope
var favoriteNumber = 23;
console.log(favoriteNumber)



if (true) {
    let lastName = "Smith"; //let - block-level scope
    var age = '25';  //var - global level scope

}

console.log(age);
//console.log(lastName); Will throw an error

//const variable = fixed and cannot be changed
const birthday = "06/23/2000";
//birthday = 06232000 will throw an error
console.log(birthday)
