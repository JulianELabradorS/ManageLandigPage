function activeMenu() {
  const navbar = document.getElementById('navbar');
  const responsiveBg = document.getElementById('responsive__background');
  const openButton = document.getElementById('open__menu');
  const closeButton = document.getElementById('close__menu');
  const body = document.body;

  navbar.classList.toggle('menu--toogle');
  responsiveBg.classList.toggle('bg--toogle');
  openButton.classList.toggle('button--toogle');
  closeButton.classList.toggle('button--toogle');
  body.classList.toggle('body--hiden');
}

window.onload = function () {
  $('.slider').slick({
    mobileFirst: true,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0',
    autoPlay: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  });
};

console.log(window.innerWidth);
window.wid;
