let windowWidth = window.innerWidth;
console.log(windowWidth);

// find url location
// console.log(window.location);

// find html element
// console.log(document.title);

// document.body.style.backgroundColor = "red";
// navigator can find more details about hardware and extensons
console.log(window.navigator.language);

const myImage = document.querySelector("img");
console.log(myImage);
const helloParagraph = document.querySelector("#hello");
const myParagraphs = document.querySelectorAll("p");
console.log(myParagraphs);
myParagraphs.forEach(changeParaBG);

function changeParaBG(item) {
  console.log(item);
  //   item.style.backgrouhd.color="red";
}

const myButton = document.querySelector("#my-button");
myButton.addEventListener("click", function () {
  alert("button is clicked");
});

console.log(helloParagraph.textContent);

function updateCatName() {
  // toggle between different text, must also change html
  helloParagraph.textContent = `Hi! My name is ${myImage.dataset.catname}`;
  // classList.add adds class
  // classList.remove removes class
  // classList.toggle toggles class
  myImage.classList.toggle("round");
}

//
const outerSection = document.querySelector(".outer");
// create element using document methods
const newPara = document.createElement("p");
newPara.textContent = "I'm a new paragraph!!! Meowww";
newPara.classsList.add("coral-box");
// document.body.appendChild(newPara);

console.log(newPara);

// add new element to header
const myHeader = document.querySelector("header");
// find my cat name
let catName = myImage.dataset.catname;
myHeader.innerHTML += `<h2> Meowww ${catname}</h2>`;

let x = 0;
x = x + 2;
x = x + 4;

myImage.addEventListener("mouseenter", addRoundClass);

function removeRoundClass() {
  myImage.classList.remove("round");
}
