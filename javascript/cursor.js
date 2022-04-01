

const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", (e) => {
    cursor.setAttribute("style","top: "+(e.clientY - scrollY)+"px; left: "+(e.clientX)+"px");
});

document.addEventListener("load", () => {
    cursor.setAttribute("style", "display:none;");
});
document.addEventListener("mouseout", () => {
    cursor.setAttribute("style", "display:none;");
});

document.addEventListener("mouseenter", () => {
    cursor.setAttribute("style", "display:inline;");
});

document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});