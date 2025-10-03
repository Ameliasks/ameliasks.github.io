// find our elements

const transformOuter = document.querySelector(".outer");
const ball = document.querySelector(".ball");
const moveButton = document.querySelector("#move-button");
const scaleButton = document.querySelector("#scale-button");
const rotateButton = document.querySelector("#rotate-button");
const resetButton = document.querySelector("#reset-button");

// define our transform variables
let ballTranslateX = 0;
let ballRotate = 0;
let ballScale = 1;

// this function will take the current value and apply to ball
function updateTransform() {
  ball.style.transform = `translateX(${ballTranslateX}px) rotate(${ballRotate}deg) scale(${ballScale})`;
}

// move ball to tthe right
function moveBall() {
  // find size details of parent element
  const parentSize = transformOuter.getBoundingClientRect();
  const goal = parentSize.width / 2 - 25;
  ballTranslateX += 10;
  if (ballTranslateX > goal) {
    alert("you scored a goal");
  }
  updateTransform();
}

// attach to button
moveButton.addEventListener("click", moveBall);

// rotate ball clockwise
function rotateBall() {
  ballRotate += 45;
  updateTransform();
}

// attach to button
rotateButton.addEventListener("click", rotateBall);

// scale ball down
function scaleBall() {
  ballScale = 0.1;
  updateTransform();
}

// attach to button
scaleButton.addEventListener("click", scaleBall);

// reset original transform
function resetBall() {
  ballTranslateX = 0;
  ballRotate = 0;
  ballScale = 1;
  updateTransform();
}

// attach to button
resetButton.addEventListener("click", resetBall);
