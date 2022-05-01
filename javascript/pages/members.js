const main = document.querySelector('.mainMembers');
const koreanName = document.querySelector("mainMembers__dets__info__korean_name");


membersData.forEach(member => {
    const dets = document.createElement('div');
    dets.setAttribute("class", "mainMembers__dets");
    const image = 'images/members/'+member.image+".jpg";

    // 
    // var showKName = ;
    
    
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
            ${member.id}<sub class="totalMembers">/${membersData.length}</sub>
        </p>
    `;

    // function doNotShow() {
        // if (member.korean_name === undefined) {
            // koreanName.style.display = "none";
            // console.log("no")
            // koreanName.setAttribute("style", "display:none");
        // }
    // }
    main.append(dets);
});

// <p class="mainMembers__dets__info__korean_name" ><span class="mainMembers__dets__info__label">Korean Name:</span> ${member.korean_name}</p>

const showTheDiv = document.querySelector(".mainMembers__dets__imageDiv");

const closeMember = document.querySelector(".close");
const theDiv = document.querySelector(".theDiv");

let showSpecificMember = false;

showTheDiv.addEventListener('click', toggleMember);
closeMember.addEventListener('click', closeMemberFunc);

function toggleMember() {
  if(!showSpecificMember) {
    theDiv.classList.add('show');
    localStorage.setItem('member', 'showing');
    console.log("showing");

    showSpecificMember = true;
  } else {
    theDiv.classList.remove('show');
    localStorage.setItem('member', 'not showing');
    console.log("not showing");

    showSpecificMember = false;
  }
}

function closeMemberFunc() {
    localStorage.setItem('member', 'not showing');
    theDiv.classList.remove('show');

    showSpecificMember = false;
    console.log("false")
}

if (localStorage.getItem("member") === "showing") {
    theDiv.classList.add('show');
}