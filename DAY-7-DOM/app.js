//Accessing Element using ID and class

const elementwithID = document.getElementById('student1');
elementwithID.textContent = 'Student 1 - Anna';

//Accessing Element using class
const elementwithClass = document.getElementsByClassName('section-A');
console.log(elementwithClass)
for (var i = 0; i < elementwithClass.length; i++) {
    var element = elementwithClass[i]
    element.textContent += ' - enrolled'
}

//Accessing Element using TagName
const styleElement = document.getElementsByTagName('span')[0]
styleElement.style.backgroundColor = "lightblue";

//Accessing Event Listener
const clickBtn = document.getElementById("button");
clickBtn.addEventListener('click', function() {
    const buttonLabel = document.getElementById('buttonDiv');
    buttonLabel.textContent = "Hello World"
    alert("Button Clicked!");
} );

//Appending new elements
const existingDiv = document.getElementById('append');
let newElement = document.createElement('div');
newElement.textContent = "Newly appended element"
existingDiv.appendChild(newElement);

//Removing elements
const removeMe = document.getElementById('remove');
removeMe.remove();

//Updating element attribute
const image = document.getElementById('image');
image.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3688/3688129.png');

//Manipulating element styles
const profile = document.getElementById('style');
profile.style.backgroundColor = 'black';
profile.style.color = 'white';

const mode = document.getElementById('mode');
mode.textContent = 'Dark Mode'
