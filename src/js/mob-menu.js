const closeBtn = document.querySelector('.close-button');
const openBtn = document.querySelector('.open-button');
const mobMenu = document.querySelector('.mob-menu');
const linkEls = document.querySelectorAll('.menu-navigation__item a');

openBtn.addEventListener('click', onOpenBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);

function onOpenBtnClick() {
  mobMenu.classList.remove('is-hidden');
}
function onCloseBtnClick() {
  mobMenu.classList.add('is-hidden');
}

linkEls.forEach(link => {
  link.addEventListener('click', onLinkClick);
});

function onLinkClick(e) {
  onCloseBtnClick();

  linkEls.forEach(link => link.classList.remove('active'));

  e.currentTarget.classList.add('active');
}

window.addEventListener('scroll', function () {
  linkEls.forEach(link => link.classList.remove('active'));
});
