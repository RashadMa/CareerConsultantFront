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


