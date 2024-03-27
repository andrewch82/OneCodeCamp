// Array
let fruit = "Mango";

//Create an Array
let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log("Fruits:", fruits);

//Access an element
console.log(fruits[2]);

//Access an out of bounds index
console.log(fruits[5]);

//Length
console.log("Length:", fruits.length);

//Update element of an array
fruits[2] = "Avocado";
console.log("Fruits:", fruits)

//Adding
//Adding an element at the end of the array.
fruits.push("Dewberry");
console.log("Fruits:", fruits)

//Adding an element at the end of the array.
fruits.unshift("Apple");
console.log("Fruits:", fruits);

//Delete
//Delete an element at the end of the array
fruits.pop();
console.log("Fruits:", fruits);

//Delete an element at the beginning of the array
fruits.shift();
console.log("Fruits:", fruits);

//Delete an element at a specific index
//Splice method will affect the main array
//let spliced_fruits = fruits.splice(1, 2);
//console.log("Fruits:", fruits);
//console.log("Spliced Fruits:", spliced_fruits)

//Sorting
//Alphabetical Order
fruits.sort();
console.log("Fruits:", fruits);

//Reverse Order
fruits.reverse();
console.log("Fruits:", fruits);

//Search Element

//indexOf
//It will return an index

let index = fruits.indexOf("Banana");
console.log("Index of Banana:", index)

//Check if an element is present in an array
//Boolean: true/false
let isIncluded = fruits.includes("Banana");
console.log("Is Banana in Fruits:", isIncluded);

//Join
let joined_furits_elements = fruits.join("-");
console.log("Joined elements:", joined_furits_elements);

//Slice an array
let sliced_fruits = fruits.slice(1, 3);
console.log("Sliced Fruits:", sliced_fruits)
console.log(fruits)

// Looping through the elements
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
