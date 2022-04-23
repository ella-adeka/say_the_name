
let colorModeToggle = false;
// const body = document.querySelector("body");
const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");
const navBar = document.querySelector(".navbar");
const membersInfo = document.querySelectorAll(".mainMembers__dets__info");

const colorMode = document.querySelector("#colorMode");


colorMode.addEventListener("click", toggleMode);

function toggleMode() {
    
    if (!colorModeToggle && !body.classList.contains('dark')   && !cursor.classList.contains('dark') ) {
        body.classList.add('dark');
        membersInfo.forEach(el => { el.classList.add('dark')});
        cursor.classList.add('dark');
        navBar.classList.add('dark');
        colorMode.style.borderColor = "white";
        colorMode.textContent = "Face The Sun";
        body.style.transition = "2s ease-in";
        localStorage.setItem('mode', 'dark');
        colorModeToggle = true;
    }
    // } else if (!colorModeToggle && !body.classList.contains('dark') && !body.classList.contains('fandomColor') ){
    //     body.classList.add('fandomColor');
    //     // membersInfo.forEach(el => { el.classList.add('dark')});
    //     // cursor.classList.add('dark');
    //     // navBar.classList.add('dark');
    //     colorMode.style.borderColor = "#92a8d1";
    //     body.style.transition = "2s ease-in";
    //     localStorage.setItem('mode', 'fandomColor');
    //     colorModeToggle = true;
    // } 
    else {
        body.classList.remove('dark');
        membersInfo.forEach(el => { el.classList.remove('dark')});
        cursor.classList.remove('dark');
        navBar.classList.remove('dark');
        colorMode.style.borderColor = "black";
        colorMode.textContent = "Fear The Sun";
        body.style.transition = "2s ease-in";
        localStorage.setItem('mode', 'light');
        colorModeToggle = false;
    }
};

if (localStorage.getItem("mode") === "dark") {
    body.classList.add('dark');
    membersInfo.forEach(el => { el.classList.add('dark')});
    cursor.classList.add('dark');
    navBar.classList.add('dark');
    colorMode.style.borderColor = "white";
    colorMode.textContent = "Face The Sun";
} 

// if (localStorage.getItem("mode") === "fandomColor"){
//     body.classList.add('fandomColor');
// } 

