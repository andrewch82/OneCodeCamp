//functions - Allows us to write reusalble blocks of code
//defining a function
function greet() {
    console.log("Hello World")
    console.log("Hello New York!")
}

//calling a functio

greet()


//function with parameter

function greetMe(name) {
    console.log("Hello, ", name);
}

greetMe("Ariston"); //Argument

//function with return
function sum(x, y) {
    console.log("Processing...")
    return x + y;
}

console.log(sum(18, 19))
