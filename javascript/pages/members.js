const main = document.querySelector('.mainMembers');


const memberCarousel = document.createElement("div");
memberCarousel.setAttribute("class", "membersCarousel");

const closeMember = document.querySelector(".close");
const theDiv = document.querySelector(".theDiv");



const dets = document.createElement('div');
dets.setAttribute("class", "mainMembers__dets");

let j = 2;
function members() {
    if (j<membersData.length) {

        let korean_name_var = membersData[j].korean_name;
        let korean_name;
        if (typeof korean_name_var != 'undefined') {
            korean_name = `<p class="mainMembers__dets__info__korean_name"><span class="mainMembers__dets__info__label">Korean Name:</span> ${membersData[j].korean_name}</p>`;
        } else{
            korean_name = `<span><span>`;
        }
        
        dets.innerHTML = `
        <div class="mainMembers__dets__imageDiv">
            <img class="mainMembers__dets__imageDiv__image" src='images/members/${membersData[j].image}' />
        </div>
        
        <div class="mainMembers__dets__info">
            <p class="mainMembers__dets__info__name">${membersData[j].stage_name}<span>${membersData[j].korean_stage_name}</span></p>
            <p class="mainMembers__dets__info__subunit">${membersData[j].sub_unit}</p>
            
            <p class="mainMembers__dets__info__birth_name"><span class="mainMembers__dets__info__label">Birth Name:</span> ${membersData[j].birth_name}</p>
            ${korean_name}
            <p class="mainMembers__dets__info__position"><span class="mainMembers__dets__info__label">Position:</span> ${membersData[j].position}</p>
            <p class="mainMembers__dets__info__nationality"><span class="mainMembers__dets__info__label">Nationality:</span> ${membersData[j].nationality}</p>
            <p class="mainMembers__dets__info__birthday"><span class="mainMembers__dets__info__label">Birthday:</span> ${membersData[j].birthday}</p>
            <p class="mainMembers__dets__info__zodiac"><span class="mainMembers__dets__info__label">Zodiac Sign:</span> ${membersData[j].zodiac_sign}</p>
        </div>   
        <p class="mainMembers__dets__pronunciation"> ${membersData[j].pronunciation}</p>
        <p class="mainMembers__dets__number">
            ${membersData[j].id}<span class="totalMembers">/${membersData.length}</span>
        </p>
        `;
        main.append(dets);
    }


    let showSpecificMember = false;

    const showTheDiv = document.querySelector(".mainMembers__dets__imageDiv__image");
    closeMember.addEventListener('click', closeMemberFunc);

    showTheDiv.addEventListener('click', toggleMember);


    function toggleMember() {
    if(!showSpecificMember) {
        // i = eachMembersData[i];
        // console.log(i)
        showCarousel(j);
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
    showCarousel(j);
    changeOnHover(j)
}




function showCarousel(j) {
    var pronounce = membersData[j].pronunciation;

    memberCarousel.innerHTML = `
        <ul class="membersCarousel__paragraph"> 
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="${membersData[j].imagesGrp[0]}" alt="">
                </span>
            </li>
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="${membersData[j].imagesGrp[1]}" alt="">
                </span>
            </li>
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="${membersData[j].imagesGrp[2]}" alt="">
                </span>
            </li>
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="${membersData[j].imagesGrp[3]}" alt="">
                </span>
            </li>
            <li>
                <span>
                    <img class="membersCarousel__paragraph__image"  src="${membersData[j].imagesGrp[4]}" alt="">
                </span>
            </li>
        </ul>
       
        <p class="member_name">${pronounce}</p>
    `;
    theDiv.append(memberCarousel);
}


function changeOnHover(j) {
    const imageDiv = document.querySelectorAll(".mainMembers__dets__imageDiv");
    const imageInDiv = document.querySelectorAll(".mainMembers__dets__imageDiv__image");

    var firstDiv = imageDiv[0];
    var firstInDiv = imageInDiv[0];


    firstDiv.addEventListener("mouseover", () => {
        firstInDiv.setAttribute("src", 'images/attacca_op3/'+membersData[j].hoverImage);
    });

    firstDiv.addEventListener("mouseout", () => {
        firstInDiv.setAttribute("src", 'images/members/'+membersData[j].image);
    });
   
    // new hoverEffect({
    //     parent: document.querySelector('.mainMembers__dets__imageDiv__image'),
    //     intensity: 0.9,
    //     image1: 'images/members/'+membersData[j].image,
    //     image2: 'images/attacca_op3/'+membersData[j].hoverImage,
    //     displacementImage: 'images/heightMap.png'
    // });

    console.log("changed")
}
