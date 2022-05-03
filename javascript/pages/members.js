const main = document.querySelector('.mainMembers');


const memberCarousel = document.createElement("div");
memberCarousel.setAttribute("class", "membersCarousel");

const closeMember = document.querySelector(".close");
const theDiv = document.querySelector(".theDiv");

membersData.forEach(member => {
    const dets = document.createElement('div');
    dets.setAttribute("class", "mainMembers__dets");
    const image = 'images/members/'+member.image+".jpg";

    dets.innerHTML = `
        <div class="mainMembers__dets__imageDiv">
            <img class="mainMembers__dets__imageDiv__image" src='${image}' />
        </div>
        
        <div class="mainMembers__dets__info">
            <p class="mainMembers__dets__info__name">${member.stage_name}<span>${member.korean_stage_name}</span></p>
            <p class="mainMembers__dets__info__subunit">${member.sub_unit}</p>
            
            <p class="mainMembers__dets__info__birth_name"><span class="mainMembers__dets__info__label">Name:</span> ${member.birth_name}</p>
            
            <p class="mainMembers__dets__info__nationality"><span class="mainMembers__dets__info__label">Nationality:</span> ${member.nationality}</p>
            <p class="mainMembers__dets__info__position"><span class="mainMembers__dets__info__label">Position:</span> ${member.position}</p>
            <p class="mainMembers__dets__info__birthday"><span class="mainMembers__dets__info__label">Birthday:</span> ${member.birthday}</p>
            <p class="mainMembers__dets__info__zodiac"><span class="mainMembers__dets__info__label">Zodiac Sign:</span> ${member.zodiac_sign}</p>
        </div>   
        <p class="mainMembers__dets__pronunciation"> ${member.pronunciation}</p>
        <p class="mainMembers__dets__number">
            ${member.id}<span class="totalMembers">/${membersData.length}</span>
        </p>
    `;

    main.append(dets);
});

let i = 0;
// eachMembersData.forEach(memberImage => {
function showCarousel() {
   
    // membersData.forEach(member => {
        let memberId = membersData.filter((member) => {member.id == i})
        let memberPronounce = membersData.filter((member) => {member.pronunciation})
        if (i === memberId) {
            var pronounce = memberPronounce;
            console.log(pronounce);
        }
    // })

    memberCarousel.innerHTML = `
        <ul class="membersCarousel__paragraph"> 
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="./images/members/${eachMembersData[i].image1}.jpg" alt="">
                </span>
            </li>
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="./images/members/${eachMembersData[i].image2}.jpg" alt="">
                </span>
            </li>
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="./images/members/${eachMembersData[i].image3}.jpg" alt="">
                </span>
            </li>
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="./images/members/${eachMembersData[i].image4}.jpg" alt="">
                </span>
            </li>
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="./images/members/${eachMembersData[i].image5}.jpg" alt="">
                </span>
            </li>
        </ul>
       
        <p class="member_name">${pronounce}</p>
    `;
    theDiv.append(memberCarousel);
}
    
    // console.log(memberImage.image1)
// });

// <p class="mainMembers__dets__info__korean_name" ><span class="mainMembers__dets__info__label">Korean Name:</span> ${member.korean_name}</p>



let showSpecificMember = false;

const showTheDiv = document.querySelector(".mainMembers__dets__imageDiv__image");
closeMember.addEventListener('click', closeMemberFunc);
// showTheDiv.forEach(el => {
//     el.addEventListener('click', toggleMember);
//     // console.log("clicked");
// });

showTheDiv.addEventListener('click', toggleMember);


function toggleMember() {
  if(!showSpecificMember) {
    // i = eachMembersData[i];
    // console.log(i)
    showCarousel();
    theDiv.classList.add('show');
    // localStorage.setItem('member', 'showing');
    // console.log("showing");

    showSpecificMember = true;
  } else {
    theDiv.classList.remove('show');
    // localStorage.setItem('member', 'not showing');
    // console.log("not showing");

    showSpecificMember = false;
  }
}

function closeMemberFunc() {
    // localStorage.setItem('member', 'not showing');
    theDiv.classList.remove('show');

    showSpecificMember = false;
    // console.log("false")
}

// if (localStorage.getItem("member") === "showing") {
//     theDiv.classList.add('show');
// }