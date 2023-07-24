$("#carousel").slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  cssEase: "linear",
  infinite: true,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(accordionHeader => {
  accordionHeader.addEventListener('click', () => {
    const accordionContent = accordionHeader.nextElementSibling;
    accordionHeader.parentElement.classList.toggle('open');
    if (accordionHeader.parentElement.classList.contains('open')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});


let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  // hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    // hamMenuIcon.classList.toggle("fa-times");
  });
});