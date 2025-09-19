//find the elements I want to interact with
const videoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const timeline = document.querySelector("#timelineProgress");
const playPauseIcon = document.querySelector("#playPauseIcon");
const currentTimeText = document.querySelector("#currentTimeFeedback");
//when js loads, remove defaults controls
videoElement.removeAttribute("controls");

// I want to update the total time based on the currently loaded media file
// this will run when the page loads, but if I wanted to change the file afterwards, I'd have to u[pdate there too
videoElement.addEventListener("canPlay", updateTotalTime);

function updateTotalTime() {
  let videoSeconds = videoElement.duration;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSec = videoSeconds % 60;
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  totalTimeText.textContent = `${totalMin}:${totalSec}`;
}

// play/pause button behaviour:
// when I click it begins video playback; when I click again, it pauses playback of media file

//toggle icon based on playing state
//cursor change on hover

function playPause() {
  if (videoElement.paused || videoElement.ended) {
    videoElement.play();
    playPauseIcon.src = "/mediaPlayer/assets/pause-button.png";
    playPauseIcon.alt = "Pause Icon";
  } else {
    videoElement.pause();
    playPauseIcon.src = "/mediaPlayer/assets/play-button.png";
    playPauseIcon.alt = "Play Icon";
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
  updateCurrentTime();
}

function updateCurrentTime() {
  let videoSeconds = videoElement.currentTime;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSec = Math.floor(videoSeconds % 60);
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  currentTimeText.textContent = `${totalMin}:${totalSec}`;
}

videoElement.addEventListener("timeupdate", updateTimeline);

// find when I click my timeline and jump to appopriate time

timeline.addEventListener("click", jumpToTime);

function jumpToTime(ev) {
  //find how far from the left we clicked
  let clickX = ev.offsetX;
  //find how wide my timeline is
  let timelineWidth = timeline.offsetWidth;
  // find the ratio of click to width
  let clickPercent = clickX / timelineWidth;
  //update the current timeline
  videoElement.currentTime = videoElement.duration * clickPercent;
}
