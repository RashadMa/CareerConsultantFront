$("#carousel").slick({
  slidesToShow: 4,
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
