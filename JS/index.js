const imageSlide = document.querySelectorAll(".slide-image");
const container = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".prev-btn");
const dots = document.querySelector(".navigation-dots");
const navBar = document.querySelector("navbar");
const menu = document.querySelector("menu");
let imgNumber = imageSlide.length;

//give us the width of the slide image 
let widthOfSlide = imageSlide[0].clientWidth;
let currentSlide = 0;

// Set up the slider to place all the images in correct position

function init() {
  imageSlide.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });
  // Set the active class to the first image
  imageSlide[0].classList.add("active");  
  navDots();
}
init();

// Navigation dots function, when the page is load the dots will be created automatically.

function navDots() {
  for (let i = 0; i < imgNumber; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    dots.appendChild(dot);

    // when click to any of the dots needs to be taken to the that slide
    dot.addEventListener("click", () => {
      goingToSlide(i);
    });
  }

// set the first one as active
  dots.children[0].classList.add("active");
}

// Next Button
//when the next button is clicked move the slide container division to the left

nextBtn.addEventListener("click", () => {
  if (currentSlide >= imgNumber - 1) {
    goingToSlide(0);
    currentSlide = 0;
    return;
  }
  currentSlide++;
  goingToSlide(currentSlide);
});

// Previous Button
previousBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goingToSlide(imgNumber - 1);
    return;
  }
  currentSlide--;
  goingToSlide(currentSlide);
});

// Go To Slidе
function goingToSlide(slideNumber) {
  container.style.transform =
    "translateX(-" + widthOfSlide * slideNumber + "px";
  currentSlide = slideNumber;

  activeClass();
}

// Set Active Class for the slide image
function activeClass() {
  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  imageSlide[currentSlide].classList.add("active");

  // Set Active Class for the navigation dots
  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  dots.children[currentSlide].classList.add("active");
}
