
const socialsDiv = document.querySelector('.socialsDiv');
const footer = document.querySelector('.footer');
const footerIcon = document.querySelector('.footerBar');

let showFooter = false;

socialsDiv.addEventListener('click', toggleFooter);

function toggleFooter() {
  if (!showFooter) {
    footer.classList.add('openFooter');
    footerIcon.classList.add('openFooter');

    showFooter = true;
  } else {
    footer.classList.remove('openFooter');
    footerIcon.classList.remove('openFooter');

    showFooter = false;
  }
}