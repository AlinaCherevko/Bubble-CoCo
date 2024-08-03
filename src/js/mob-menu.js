const closeBtn = document.querySelector('.close-button');
const openBtn = document.querySelector('.open-button');
const mobMenu = document.querySelector('.mob-menu');
const menuLinkEls = document.querySelectorAll('.menu-navigation__item a');
const navLinks = document.querySelectorAll('navigation__item a');

openBtn.addEventListener('click', onOpenBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);

function onOpenBtnClick() {
  mobMenu.classList.remove('is-hidden');
}
function onCloseBtnClick() {
  mobMenu.classList.add('is-hidden');
}

menuLinkEls.forEach(link => {
  link.addEventListener('click', onMenuLinkClick);
});

function onMenuLinkClick() {
  onCloseBtnClick();
}

navLinks.forEach(link => {
  link.addEventListener('click', onNavLinkClick);
});

function onNavLinkClick(e) {
  navLinks.forEach(link => link.classList.remove('active'));
  e.currentTarget.classList.add('active');
}

window.addEventListener('scroll', function () {
  navLinks.forEach(link => link.classList.remove('active'));
});
