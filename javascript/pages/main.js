 const diffNames = [
    {
        id: "01",
        name: "Seventeen",
        font: "Trovas"
    },
    {
        id: "02",
        name: "17.",
        font: "New York"
    },
    {
        id: "03",
        name: "세븐틴",
        font: "'EB Garamond', serif"
    },
    {
        id: "04",
        name: "seh·vuhn·teen",
        font: "Hugo"
        // font: "Dolce Gargia"
    },
    {
        id: "05",
        name: "/ˌsev(ə)nˈtiːn/",
        font: "Valery"
    },
    {
        id: "06",
        name: "XVII",
        font: "Seraya"
    },
    {
        id: "07",
        name: "十七",
        font: "'Garamond', sans-serif"
    },
 ]

 // Select the necessary elements with querySelector
 const mainHome = document.querySelector('.mainHome');
 const paragraph = document.querySelector('.mainHome__paragraph');
 const mainIntro = document.querySelector(".mainHome__paragraph__intro");
 const mainHead = document.querySelector(".mainHome__paragraph__intro__h1");

 let j = 0;
 let showDiffTitles;

 function showDiffTitlesFunc() {
    showDiffTitles = setInterval(() => {
        j++;

        mainHead.textContent = `${diffNames[j].name}`;
        mainHead.setAttribute("style", `font-family: ${diffNames[j].font}`);

        if (j>= diffNames.length -1) {
            clearInterval(showDiffTitles);
            j=-1;
            if (j = -1) {
                showDiffTitlesFunc(); 
            }
        }
    }, 5000);

    mainIntro.append(mainHead); 
 }