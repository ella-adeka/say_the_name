
let colorModeToggle = false;
const body = document.querySelector("body");
const link = document.querySelector(".link");
const cursor = document.querySelector("#cursor");
const navBar = document.querySelector(".navbar");
const colorMode = document.querySelector("#colorMode");

colorMode.addEventListener("click", toggleMode);

function toggleMode() {
    
    if (!colorModeToggle && !body.classList.contains('dark') && !link.classList.contains('dark') && !cursor.classList.contains('dark') ) {
        body.classList.add('dark');
        link.classList.add('dark');
        cursor.classList.add('dark');
        navBar.classList.add('dark');
        colorMode.style.borderColor = "white";
        body.style.transition = "2s ease-in";
        localStorage.setItem('mode', 'dark');
        colorModeToggle = true;
    } else {
        body.classList.remove('dark');
        link.classList.remove('dark');
        cursor.classList.remove('dark');
        navBar.classList.remove('dark');
        colorMode.style.borderColor = "black";
        body.style.transition = "2s ease-in";
        localStorage.setItem('mode', 'light');
        colorModeToggle = false;
    }
};

if (localStorage.getItem("mode") === "dark") {
    body.classList.add('dark');
    link.classList.add('dark');
    cursor.classList.add('dark');
    navBar.classList.add('dark');
    colorMode.style.borderColor = "white";
}

