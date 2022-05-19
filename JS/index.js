const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");
const navigationBar = document.querySelector("navbar");
const menu = document.querySelector("menu");

let numberOfImages = slideImage.length;

//give us the width of the slide image 
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// Set up the slider to place all the images in correct position

function init() {
  /*   
   Set the left position of the image
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });
  // Set the active class to the first image
  slideImage[0].classList.add("active");  
  createNavigationDots();
}
init();

// Navigation dots function, when the page is load the dots will be created automatically.

function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    // when click to any of the dots needs to be taken to the that slide
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

// set the first one as active
  navigationDots.children[0].classList.add("active");
}

// Next Button
//when the next button is clicked move the slide container division to the left

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    currentSlide = 0;
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
});

// Previous Button
prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }
  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slidе
function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px";
  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class for the slide image
function setActiveClass() {
  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  // Set Active Class for the navigation dots
  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}
