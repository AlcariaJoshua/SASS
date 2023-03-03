
const show = document.querySelector('.burger__btn');
const hideNav = document.querySelector('.header__nav');

show.addEventListener('click', () =>{
    show.classList.toggle("open");
    hideNav.classList.toggle("open");
})

