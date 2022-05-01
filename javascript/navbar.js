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
var homeTl = gsap.timeline();
var profileTl = gsap.timeline();
var discographyTl = gsap.timeline();
var membersTl = gsap.timeline();

homeLink.addEventListener("mouseover", () =>{
    homeTl.to(".home-project-preview", {duration: 1.6, width: "50%",ease: "Cubic.easeInOut"});
});
homeLink.addEventListener("mouseout", () =>{
    homeTl.to(".home-project-preview", {duration: .2, width: "0%",ease: "Expo.easeInOut"});
});

profileLink.addEventListener("mouseover", () =>{
    profileTl.to(".profile-project-preview", {duration: 1.8, width: "100%",ease: "Cubic.easeInOut"});
});
profileLink.addEventListener("mouseout", () =>{
    profileTl.to(".profile-project-preview", {duration: .2, width: "0%",ease: "Expo.easeInOut"});
});

discographyLink.addEventListener("mouseover", () =>{
    discographyTl.to(".discography-project-preview", {duration: 1.8, width: "55%",ease: "Cubic.easeInOut"});
});
discographyLink.addEventListener("mouseout", () =>{
    discographyTl.to(".discography-project-preview", {duration: .2, width: "0%",ease: "Expo.easeInOut"});
});

membersLink.addEventListener("mouseover", () =>{
    membersTl.to(".members-project-preview", {duration: 1.8, width: "60%",ease: "Cubic.easeInOut"});
});
membersLink.addEventListener("mouseout", () =>{
    membersTl.to(".members-project-preview", {duration: .2, width: "0%",ease: "Expo.easeInOut"});
});
// END OF NAVBAR ANIMATION