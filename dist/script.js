
const show = document.querySelector('.burger__btn');
const hideNav = document.querySelector('.header__nav');

show.addEventListener('click', () =>{
    show.classList.toggle("open");
    hideNav.classList.toggle("open");
})

var slider = tns({
    container: '.slider__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controlsText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    reponsive:{
        967:{
        items: 3,
        }
    },
  });
