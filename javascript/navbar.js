const homeLink = document.querySelector(".home_link");
const profileLink = document.querySelector(".profile_link");

homeLink.addEventListener("mouseover", () => {
    // homeLink.style.color = "pink";
    homeLink.style.cssText = "background: url('/images/members/woozi_attacca_op1.jpg') no-repeat fixed center;background-size: 600px; color:pink";
});

profileLink.addEventListener("mouseover", () => {
    // profileLink.style.color = "pink";
    profileLink.style.cssText = "background: url('/images/members/wonwoo_attacca_op1.jpg') no-repeat fixed center;background-size: cover; color:pink";
});
