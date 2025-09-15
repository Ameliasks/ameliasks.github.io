//find the elements I want to interact with
const videoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const timeline = document.querySelector("#timelineProgress");

//when js loads, remove defaults controls
videoElement.removeAttribute("controls");

// play/pause button behaviour:
// when I click it begins video playback; when I click again, it pauses playback of media file

//toggle icon based on playing state
//cursor change on hover

function playPause() {
  if (videoElement.paused || videoElement.ended) {
    videoElement.play();
    playPauseButton.textContent = "⏸";
  } else {
    videoElement.pause();
    playPauseButton.textContent = "▶";
  }
}

playPauseButton.addEventListener("click", playPause);

//timeline behaviour:
// it should update as media playback occurs to show current time

function updateTimeline() {
  console.log(videoElement.currentTime);
  let timePercent = (videoElement.currentTime / videoElement.duration) * 100;
  console.log(timePercent);
  timeline.value = timePercent;
}

videoElement.addEventListener("timeupdate", updateTimeline);
