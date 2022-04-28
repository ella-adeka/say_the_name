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

// NAVBAR ANIMATION
const homeLink = document.querySelector(".homeLink");
const profileLink = document.querySelector(".profileLink");
const discographyLink = document.querySelector(".discographyLink");
const membersLink = document.querySelector(".membersLink");
var tl = gsap.timeline();

homeLink.addEventListener("mouseover", () =>{
    tl.to(".home-project-preview", {duration: 2, width: "50%",ease: "Expo.easeInOut"});
});
homeLink.addEventListener("mouseout", () =>{
    tl.to(".home-project-preview", {duration: .2, width: "0%",ease: "Expo.easeInOut"});
});

profileLink.addEventListener("mouseover", () =>{
    tl.to(".profile-project-preview", {duration: 1.2, width: "100%",ease: "Expo.easeInOut"});
});
profileLink.addEventListener("mouseout", () =>{
    tl.to(".profile-project-preview", {duration: .2, width: "0%",ease: "Expo.easeInOut"});
});

discographyLink.addEventListener("mouseover", () =>{
    tl.to(".discography-project-preview", {duration: 1.2, width: "55%",ease: "Expo.easeInOut"});
});
discographyLink.addEventListener("mouseout", () =>{
    tl.to(".discography-project-preview", {duration: .2, width: "0%",ease: "Expo.easeInOut"});
});

membersLink.addEventListener("mouseover", () =>{
    tl.to(".members-project-preview", {duration: 1.2, width: "60%",ease: "Expo.easeInOut"});
});
membersLink.addEventListener("mouseout", () =>{
    tl.to(".members-project-preview", {duration: .2, width: "0%",ease: "Expo.easeInOut"});
});
// END OF NAVBAR ANIMATION