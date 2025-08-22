//variables
// this is how we find a document
const documentBody = document.querySelector("body");
console.log(document.body);
const myName = "Ams";
let myHungriness = 1.0;
console.log(myHungriness);
myHungriness = 0.5;
console.log(myHungriness);

// console.log() sends message to browser console
console.log("hello");

let stepNumber = 4;
console.log("Taking step:", stepNumber, "...I think");

// let name = prompt("What's your name?");

// strings
let firstName = "Ams";
let surname = "Siew";
let quote = "This is a quote";
console.log(quote);
let nameString = `My full name is 

${firstName} ${surname}`;
console.log(nameString);

//tyoe conversion
let myAge = 23;
let timePass = "5";
let updatedAge = myAge + parseInt(timePass);
console.log(updatedAge);

//math operators + - = / *

//arrays
let myPets = ["spot", "joey", "charlie", "lola"];
console.log(myPets);
console.log(myPets[3]);

let a = 10;
let b = 15;
let setToBlue = false;

//conditionals
if (setToBlue) {
  documentBody.style.backgroundColor = "red";
} else {
  documentBody.style.backgroundColor = "blue";
}

//for loop

for (let steps = 0; steps < 5; steps++) {
  console.log("Steps Taken:", steps);
}

// for each

const numbers = [12, 14, 8, 6];
let total = 0;

function totalNumbers(item) {
  total = total + item;
  console.log("item price", item, "running total", total);
}

numbers.forEach(totalNumbers);
console.log("final total", total);

let hiddenVariable = "?";
///functions
function tellMeHowHungryIAm() {
  console.log("I'm not sure");
}

function addTwoNumbers(a, b) {
  let addTotal = a + b;
  return addTotal;
}

let numberTotal = addTwoNumbers(3, 4);
let diffTotal = addTwoNumbers(12, 50);
console.log(numberTotal, diffTotal);

