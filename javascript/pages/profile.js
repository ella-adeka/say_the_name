// DISPLAY THE NAME "SEVENTEEN" ON SCROLL
const seventeen = document.querySelector(".mainProfile__seventeen__name");
// seventeen.setAttribute("style", "right:-100%");

document.addEventListener("scroll", () => {
    seventeen.setAttribute("style", "right:"+ scrollY);
})


// DISPLAY MEMBERS NAMES IN MEMBER SECTION OF PROFILE
const namesParagraph = document.querySelector('.mainProfile__paragraph__members__names');
const profileMembersImage = document.querySelector('.mainProfile__paragraph__members__image');

profileMembersData.forEach(profileMember => {
    const namesSpan = document.createElement("span");
    
    namesSpan.innerHTML = `
        ${profileMember.name} &#183;
    `;
    // &#183;
    namesParagraph.append(namesSpan);

    // let profileMemberName = `${profileMember.name}`

    namesSpan.addEventListener("mouseover", () => {
        profileMembersImage.setAttribute("src", `images/members/${profileMember.image}.jpg`); 
        profileMembersImage.style.cssText = "filter: grayscale(0%)";
    });
});

namesParagraph.addEventListener("mouseleave", () => {
    setTimeout(() => {
        profileMembersImage.setAttribute("src", "images/attacca_group_photo_3.jpg");
        profileMembersImage.style.cssText = "filter: grayscale(100%)";
    }, 1000);
});
