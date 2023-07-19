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

// $('.slider').slick({
//   autoplay: true,
//   autoplaySpeed: 0,
//   speed: 2500,
//   slidesToShow: 4,       
//   cssEase: "linear",
//   pauseOnHover: false,    //added(do not stop when hovered
//   pauseOnFocus: false,    //added(Do not stop when focused
// });