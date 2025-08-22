// find my elements
const appBody = document.querySelector("body");
const tempInput = document.querySelector("#tempInput");
const tempReturnText = document.querySelector("#tempReturn");

function interpretTemp() {
  //   console.log(tempInput.value);
  let inputTemp = tempInput.value;
  if (inputTemp < 10) {
    tempReturnText.textContent = "It's freezing";
    appBody.style.backgroundColor = "skyblue";
  } else if (inputTemp < 18) {
    tempReturnText.textContent = "It's cold";
    appBody.style.backgroundColor = "blue";
  } else if (inputTemp < 26) {
    tempReturnText.textContent = "It's mild";
    appBody.style.backgroundColor = "yellow";
  } else if (inputTemp < 30) {
    tempReturnText.textContent = "It's warm";
    appBody.style.backgroundColor = "tomato";
  } else tempReturnText.textContent = "It's hot!!!";
  appBody.style.backgroundColor = "red";
}

//temp 0-10 : freezing
//temp 10-18 : cold
//temp 18-26 : mild
//temp 26-30: warm
//temp 30+: hot

// interpretTemp();
