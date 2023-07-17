const carousel = document.querySelector('.carousel');
const slides = document.querySelector('.slides');
let slideIndex = 0;

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
console.log("hi");
setInterval(nextSlide, 3000); /* Change slide every 3 seconds */
