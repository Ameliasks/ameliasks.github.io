// possible selections
const options = ["ROCK", "PAPER", "SCISSORS"];
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

// find selection and results
const selection = document.querySelector("#selection");
const result = document.querySelector("#result");

// click to find correct array index
rockButton.addEventListener("click", function () {
  checkResult(0);
});
paperButton.addEventListener("click", function () {
  checkResult(1);
});
scissorsButton.addEventListener("click", function () {
  checkResult(2);
});

function checkResult(mySelection) {
  // find user selection from array
  let userSelection = options[mySelection];
  console.log(mySelection);
  //   find computer selection from array
  // math.floor rounds the whole number
  // *3 randomly generates 0-3
  let randomSelect = Math.floor(Math.random() * 3);
  console.log(randomSelect);
  let computerSelection = options[randomSelect];

  //   display both user and computer selections
  selection.innerHTML = `<p id="my-choice">
<span class ="${userSelection.toLowerCase()}">${userSelection}</span></p>
<p id="computer-choice">
<span class ="${computerSelection.toLowerCase()}">${computerSelection}</span>
</p>`;
  if (userSelection === computerSelection) {
    result.innerHTML = `<p class="tie"> It was a tie:|</p>`;
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
  } else {
    result.innerHTML = `<p class="loose"> You loseeeee </p>`;
  }
}
