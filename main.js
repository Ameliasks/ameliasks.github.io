let draggableItems = document.querySelectorAll(".draggable-item");

draggableItems.forEach((item) => {
  let isDragging = false;
  let offsetX, offsetY;

  item.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - item.getBoundingClientRect().left;
    offsetY = e.clientY - item.getBoundingClientRect().top;
    item.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    item.style.left = e.clientX - offsetX + "px";
    item.style.top = e.clientY - offsetY + "px";
  });

  document.addEventListener("mouseup", () => {
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
