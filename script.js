const images = document.querySelectorAll("img");
const forwardButton = document.querySelector(".forwardButton");
const backwardButton = document.querySelector(".backwardButton");
const pictureFrame = document.querySelector(".picture-frame");
const circleContainer = document.querySelector(".circles");
const circles = document.getElementsByClassName("circle");
let slideCount = 0;

function initialImage() {
  fillCircle(slideCount);
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    if (i === 0) {
      images[i].style.display = "block";
      pictureFrame.appendChild(images[i]);
    }
  }
}

function lastImage() {
  fillCircle(slideCount);
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    if (i === 4) {
      images[i].style.display = "block";
      pictureFrame.appendChild(images[i]);
    }
  }
}

function changeImageForward(count) {
  for (let i = 0; i < images.length; i++) {
    if (count === i) {
      images[i].style.display = "block";
      images[i - 1].style.display = "none";
      pictureFrame.appendChild(images[i]);
      pictureFrame.removeChild(images[i - 1]);
    }
  }
}

function changeImageBackward(count) {
  for (let i = 0; i < images.length; i++) {
    if (count === i) {
      images[i].style.display = "block";
      images[i + 1].style.display = "none";
      pictureFrame.appendChild(images[i]);
      pictureFrame.removeChild(images[i + 1]);
    }
  }
}

function createCircles() {
  for (let i = 0; i < images.length; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circleContainer.appendChild(circle);
    if (i === 0) {
      circle.classList.add("active");
    }
  }
}

function fillCircle(count) {
  for (let i = 0; i < circles.length; i++) {
    if (i === count) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }
  }
}

function slideInterval() {
  setInterval(() => {
    slideCount++;
    fillCircle(slideCount);
    changeImageForward(slideCount);
    if (slideCount > 4) {
      slideCount = 0;
      initialImage();
    }
  }, 5000);
}

forwardButton.addEventListener("click", () => {
  slideCount++;
  changeImageForward(slideCount);
  fillCircle(slideCount);
  if (slideCount > 4) {
    slideCount = 0;
    initialImage();
  }
});

backwardButton.addEventListener("click", () => {
  slideCount--;
  changeImageBackward(slideCount);
  fillCircle(slideCount);
  if (slideCount < 0) {
    slideCount = 4;
    lastImage();
  }
});

initialImage();
slideInterval();
createCircles();