// DISPLAY THE NAME "SEVENTEEN" ON SCROLL
const mainProfile = document.querySelector(".mainProfile");
const groupName = document.querySelector(".mainProfile__paragraph__name");
const seventeen = document.querySelector(".mainProfile__seventeen_name");
const debutImages = document.querySelector(".mainProfile__paragraph__debutImages");

const hhu = document.querySelector(".mainProfile__paragraph__units__unit__hhu");

const scoups = document.querySelector(".scoups");
const wonwoo = document.querySelector(".wonwoo");


// seventeen.setAttribute("style", "margin-left: 500px;");
let x = 0;
// let i = 0;
mainProfile.addEventListener("scroll", () => {
    let i = mainProfile.scrollTop;
    // groupName.setAttribute("style", "height:80em");
    // if (i < 41) {
    //     groupName.setAttribute("style", "height: " + (i.toFixed()) + "em;");

    //     if (i === 0) {
    //         groupName.setAttribute("style", "height: 20em;");
    //     }
    // } 
    // // i++;
    // if (i <60) {
    //     groupName.setAttribute("style", "height: " + (i.toFixed()) + "em; transition: .5s ease-in;");
    //     // groupName.setAttribute("style", "height: 30em; transition: .5s ease-in;width:100%");

    //     if (i === 0) {
    //         groupName.setAttribute("style", "height: 20em; transition: .5s ease-in;");
    //     }
    // } 
    
    

    // LET NAME MOVE ACROSS THE X AXIS ON SCROLL
    // if (i == 400) {
        seventeen.setAttribute("style", "margin-left: -" + (i.toFixed()) + "px;");
    //    if (i == 100) {
        debutImages.setAttribute("style", "margin-left: -" + (i.toFixed()) + "px;");
    //    }
        

        // seventeen.setAttribute("style", "opacity:0;");
        // if (i === 100) {
        //     seventeen.setAttribute("style", "opacity:0;");
        // }

        // if (i === 0) {
        //     seventeen.setAttribute("style", "margin-left: 0;");
        // }
    // }
    
});





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

    namesSpan.addEventListener("click", () => {
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


scoups.addEventListener("mouseover", () => {
    hhu.style.cssText = "background: url('/images/members/scoups_attacca_op1.jpg') no-repeat fixed; background-size: cover;";
});

scoups.addEventListener("mouseout", () => {
    hhu.style.cssText = "background: url('/images/units/hhu_2.jpg') no-repeat fixed; background-size: cover;";
})

wonwoo.addEventListener("mouseover", () => {
    hhu.style.cssText = "background: url('/images/members/wonwoo_attacca_op1.jpg') no-repeat fixed; background-size: cover;";
})

// hhu.addEventListener("mouseout", () => {
//     hhu.style.cssText = "background: url('/images/units/hhu_2.jpg') no-repeat fixed; background-size: cover;";
// })

// hhu.addEventListener("mouseover", () => {
//     hhu.style.cssText = "background: url('/images/units/hhu_3.jpeg') no-repeat fixed; background-size: cover;";
// })