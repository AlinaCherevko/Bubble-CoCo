const closeBtn = document.querySelector('.close-button');
const openBtn = document.querySelector('.open-button');
const mobMenu = document.querySelector('.mob-menu');

openBtn.addEventListener('click', onOpenBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);

function onOpenBtnClick() {
  mobMenu.classList.remove('is-hidden');
}
function onCloseBtnClick() {
  mobMenu.classList.add('is-hidden');
}
