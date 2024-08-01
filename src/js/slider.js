import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 6,
  loop: true,
  speed: 600,

  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
