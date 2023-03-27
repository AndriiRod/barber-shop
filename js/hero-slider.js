$('.hero__slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  autoplay: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
});
