let layer = 10;

let draggableItems = document.querySelectorAll(".draggable-item");

draggableItems.forEach((item) => {
  let isDragging = false;
  let dragStartX, dragStartY, dragObjLeft, dragObjTop;

  item.addEventListener("mousedown", (e) => {
    isDragging = true;
    // offsetX = e.pageX - item.getBoundingClientRect().left;
    // offsetY = e.pageY - item.getBoundingClientRect().top;
    dragStartX = e.pageX;
    dragStartY = e.pageY;
    dragObjLeft = e.target.offsetLeft;
    dragObjTop = e.target.offsetTop;
    layer += 1;
    item.style.zIndex = layer;
  });

  window.addEventListener("mousemove", (e) => {
    console.log(isDragging);
    if (!isDragging) return;
    // item.style.left = e.pageX - offsetX + "px";
    // item.style.top = e.pageY - offsetY + "px";
    item.style.left = dragObjLeft + e.pageX - dragStartX + "px";
    item.style.top = dragObjTop + e.pageY - dragStartY + "px";
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
});

// fullscreen image

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

var secretText = document.getElementById("secretText");

secretText.addEventListener("mouseover", function () {
  secretText.style.display = "none";
  secretText.style.transition = "all 1s ease";
});

// scroll effect

window.addEventListener("scroll", function () {
  const rotatingElement = document.getElementById("scrollPayPhone");
  let scrollPayPhone = window.scrollY;
  rotatingElement.style.transform = `translateY(${scrollPayPhone * 0.2}px)`;
});

window.addEventListener("scroll", function () {
  const rotatingElementTwo = document.getElementById("scrollCoffee");

  const rotationDegreeTwo = window.pageYOffset / 4.7;
  let scrollPosition = window.scrollY;
  rotatingElementTwo.style.transform = `translateX(${
    scrollPosition * 0.5
  }px)translateY(${scrollPosition * 0.85}px)rotate(${rotationDegreeTwo}deg)`;
});
