import '/javascript/color_mode.js';
import '/javascript/cursor.js';

const menuBtn = document.querySelector('.menu_btn');
const hamburger = document.querySelector('.menu_btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.navbar');
const navItem = document.querySelector('.navbar__item');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItem.classList.add('open');

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItem.classList.remove('open');

    showMenu = false;
  }
}