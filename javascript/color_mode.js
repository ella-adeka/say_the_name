
let colorModeToggle = false;
// const body = document.querySelector("body");
const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");
const navBar = document.querySelector(".navbar");
const footerBar = document.querySelector(".footerBar");
const membersInfo = document.querySelectorAll(".mainMembers__dets__info");

// const colorMode = document.querySelector("#colorMode");


colorMode.addEventListener("click", toggleMode);

function toggleMode() {
    
    if (!colorModeToggle && !body.classList.contains('dark')   ) {
        body.classList.add('dark');
        // membersInfo.forEach(el => { el.classList.add('dark')});
        // cursor.classList.add('dark');
        // navBar.classList.add('dark');
        // footerBar.classList.add('dark');
        // colorMode.style.borderColor = "white";
        colorMode.innerHTML = `
            <span class="state">Face The Sun</span>

            <?xml version="1.0" encoding="utf-8"?>
            <!-- Generator: Adobe Illustrator 25.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg class="sun" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 640 480" style="enable-background:new 0 0 640 480;" xml:space="preserve" >
            <g>
                <circle cx="310.62" cy="226.54" r="24.73" style="filter: blur(1.5px);"/>
                <ellipse cx="310.62" cy="186.76" rx="1.84" ry="11.38" style="filter: blur(1.5px);"/>
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -58.1119 255.9791)" cx="279.94" cy="198.14" rx="1.84" ry="11.38" style="filter: blur(1.5px);" />
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -82.9547 315.9547)" cx="339.91" cy="258.11" rx="1.84" ry="11.38" style="filter: blur(1.5px);"/>
                <ellipse cx="351.29" cy="226.54" rx="11.38" ry="1.84" style="filter: blur(1.5px);" />
                <ellipse cx="310.62" cy="266.31" rx="1.84" ry="11.38" style="filter: blur(1.5px);" />
                <ellipse cx="267.44" cy="226.54" rx="11.38" ry="1.84" style="filter: blur(1.5px);" />
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -40.9443 297.4254)" cx="338.55" cy="198.14" rx="11.38" ry="1.84" style="filter: blur(1.5px);" />
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -101.3932 273.9069)" cx="279.94" cy="259.35" rx="11.38" ry="1.84"/>
            </g>
            </svg>
        `;
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
        // membersInfo.forEach(el => { el.classList.remove('dark')});
        // cursor.classList.remove('dark');
        // navBar.classList.remove('dark');
        // footerBar.classList.remove('dark');
        // colorMode.style.borderColor = "black";
        colorMode.innerHTML = `
            <span class="state">Fear The Sun</span>

            <?xml version="1.0" encoding="utf-8"?>
            <svg class="moon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 640 480" style="enable-background:new 0 0 640 480;" xml:space="preserve">
            <path d="M306.72,162.03c-10.01,0-19.49,2.28-27.95,6.34c34.93,0.92,62.97,29.49,62.97,64.65c0,25.72-15.01,47.94-36.74,58.37
                c0.58,0.02,1.15,0.04,1.73,0.04c35.73,0,64.7-28.97,64.7-64.7S342.45,162.03,306.72,162.03z"/>
            </svg>
        `;
        body.style.transition = "2s ease-in";
        localStorage.setItem('mode', 'light');
        colorModeToggle = false;
    }
};

if (localStorage.getItem("mode") === "dark") {
    body.classList.add('dark');
    // membersInfo.forEach(el => { el.classList.add('dark')});
    // cursor.classList.add('dark');
    // navBar.classList.add('dark');
    // footerBar.classList.add('dark');
    // colorMode.style.borderColor = "white";
    colorMode.innerHTML = `
            <span class="state">Face The Sun</span>

            <?xml version="1.0" encoding="utf-8"?>
            <!-- Generator: Adobe Illustrator 25.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
            <svg class="sun"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 640 480" style="enable-background:new 0 0 640 480;" xml:space="preserve" >
            <g>
                <circle cx="310.62" cy="226.54" r="24.73" style="filter: blur(1.5px);"/>
                <ellipse cx="310.62" cy="186.76" rx="1.84" ry="11.38" style="filter: blur(1.5px);"/>
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -58.1119 255.9791)" cx="279.94" cy="198.14" rx="1.84" ry="11.38" style="filter: blur(1.5px);" />
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -82.9547 315.9547)" cx="339.91" cy="258.11" rx="1.84" ry="11.38" style="filter: blur(1.5px);"/>
                <ellipse cx="351.29" cy="226.54" rx="11.38" ry="1.84" style="filter: blur(1.5px);" />
                <ellipse cx="310.62" cy="266.31" rx="1.84" ry="11.38" style="filter: blur(1.5px);" />
                <ellipse cx="267.44" cy="226.54" rx="11.38" ry="1.84" style="filter: blur(1.5px);" />
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -40.9443 297.4254)" cx="338.55" cy="198.14" rx="11.38" ry="1.84" style="filter: blur(1.5px);" />
                <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -101.3932 273.9069)" cx="279.94" cy="259.35" rx="11.38" ry="1.84"/>
            </g>
            </svg>
        `;
} 

// if (localStorage.getItem("mode") === "fandomColor"){
//     body.classList.add('fandomColor');
// } 

