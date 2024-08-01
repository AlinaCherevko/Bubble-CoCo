const closeBtn = document.querySelector('.close-button');
const openBtn = document.querySelector('.open-button');
const mobMenu = document.querySelector('.mob-menu');
const homeEl = document.querySelector('.hero');
const advantagesEl = document.querySelector('.advantages');
const aboutEl = document.querySelector('.about-the-game');
const howPlayEl = document.querySelector('.how-to-play');
const benefitsEl = document.querySelector('.benefits');
const faqEl = document.querySelector('.faq');
const galleryEl = document.querySelector('.gallery');

openBtn.addEventListener('click', onOpenBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);

function onOpenBtnClick() {
  mobMenu.classList.remove('is-hidden');
}
function onCloseBtnClick() {
  mobMenu.classList.add('is-hidden');
}
mobMenu.addEventListener('click', onLinkClick);

function onLinkClick() {
  if (
    (target =
      homeEl ||
      advantagesEl ||
      aboutEl ||
      howPlayEl ||
      benefitsEl ||
      faqEl ||
      galleryEl)
  )
    onCloseBtnClick();
}
