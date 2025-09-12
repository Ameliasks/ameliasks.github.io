// find the elements we want to interact

const popButton = document.querySelector("popButton");
const popAudio = document.querySelector("popAudio");

// this function plays the popping sound

function playPop() {
  popAudio.play();
}

// run play pop function when button is clicked

popButton.addEventListener("click", playPop);
