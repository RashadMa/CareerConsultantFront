$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2500,
    cssEase: "linear",
    arrows: false,
  });
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    const accordionContent = accordionHeader.nextElementSibling;
    accordionHeader.parentElement.classList.toggle("open");
    if (accordionHeader.parentElement.classList.contains("open")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

const mobileMenuToggle = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");
const navListItems = navList.querySelectorAll("li");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenuToggle.classList.toggle("active");
  navList.classList.toggle("active");
});

navListItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenuToggle.classList.remove("active");
    navList.classList.remove("active");
  });
});
