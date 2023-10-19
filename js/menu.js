const menuBtn = document.querySelector('.navbar-toggler');
const menuWrap = document.querySelector('.menu-wrap');

const toggleMenuWrap = () => menuWrap.classList.toggle('menu-wrap_active');
menuBtn.addEventListener('click', toggleMenuWrap);