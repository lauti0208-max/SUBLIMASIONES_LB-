$('.carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  prevArrow: '<img class="flecha" src="img/angulo-izquierdo.svg">',
  nextArrow: '<img class="flecha" src="img/angulo-derecho.svg">',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});