const main = document.querySelector('.mainDiscography');
const divUnderMain = document.querySelector('.mainDiscography__discography');

// PREVIOUS AND NEXT BUTTONS
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');

// LISTEN AND WATCH LINKS
const listenLink = document.querySelector('.listen-link');
const watchLink = document.querySelector('.watch-link');

const dets = document.createElement("div");

// Initialize and assign value to i;
let i = 0;
// localStorage.setItem("album", `${discographyData[i].album_name}`);
function prevAlbum() {
    if (i !== 0) {
        i--;
        // localStorage.setItem("album", `${discographyData[i].album_name}`);
    } 
}

function nextAlbum() {
    if (i < discographyData.length) {
        i++;
        // localStorage.setItem("album", `${discographyData[i].album_name}`);
    } 
}

prev.addEventListener("click", () => {
    prevAlbum();
    localStorage.setItem("album", `${discographyData[i].album_name}`);
    showAlbums();
    
});

next.addEventListener("click", () => {
    nextAlbum();
    localStorage.setItem("album", `${discographyData[i].album_name}`);
    // if (localStorage.getItem("album") === `${discographyData[i].album_name}`) {
        showAlbums();
    // }
});

// if (localStorage.getItem("album") === `${discographyData[i].album_name}`) {
//     showAlbums();
// }

// function showAlbumsInStorage() {
//     showAlbums();
//     // localStorage.setItem("album", `${discographyData[i].album_name}`);
//     localStorage.setItem("album",`${discographyData[i].album_name}`);
        
// }
// localStorage.getItem("album") === `${discographyData[i].album_name}`

// if (localStorage.getItem("album", `${discographyData[i].album_name}`)) {   
     
function showAlbums() {
    // localStorage.setItem("album", `${discographyData[i].album_name}`);
    // 
        // showAlbums();
    // }
    // showAlbumsInStorage()
    // localStorage.setItem("album", `${discographyData[i].album_name}`);
    divUnderMain.innerHTML = localStorage.getItem("album");
    // if (i<discographyData.length) {
        
    //     // localStorage.getItem("album") == `${discographyData[i].album_name}`;
    //     // if(localStorage.getItem("album") === `${discographyData[i].album_name}`){
            
            
    //         let songList = discographyData[i].tracks.length;
    //         let track = "<ol class='mainDiscography__discography__dets__details__paragraph__track_list__ol'>";
    //         for (let j = 0; j < songList; j++) {
    //             track  += "<li class='mainDiscography__discography__dets__details__paragraph__track_list__ol__li'>" + discographyData[i].tracks[j] + "</li>";
    //         }
    //         track+= "</ol>";

    //         listenLink.setAttribute('href',`${discographyData[i].album_link}`);
    //         watchLink.setAttribute('href',`${discographyData[i].youtube_link}`);

    //         dets.innerHTML = `
    //             <p class="mainDiscography__discography__dets__album_category">${discographyData[i].category}</p>
    //             <p class="mainDiscography__discography__dets__album_name">${discographyData[i].album_name}</p>
    //             <p class="mainDiscography__discography__dets__title_track">${discographyData[i].title_track}</p>
    //             <div class="mainDiscography__discography__dets__details">
    //                 <div class="mainDiscography__discography__dets__details__imageDiv">
    //                     <img class="mainDiscography__discography__dets__details__imageDiv__image" src=./images/discography/${discographyData[i].image} />
    //                     <br>
    //                     <br>
    //                     <br>
    //                 </div>
    //                 <div class="mainDiscography___discography_dets__details__paragraph">
    //                     <p class="mainDiscography__discography__dets__details__paragraph__album_detail">${discographyData[i].album_detail}</p>
    //                     <p class="mainDiscography__discography__dets__details__paragraph__artist_name">${discographyData[i].artist_name}</p>
    //                     <p class="mainDiscography__discography__dets__details__paragraph__release_date">${discographyData[i].release_date}</p>
    //                     <p class="mainDiscography__discography__dets__details__paragraph__track_list">${track}</p>
    //                 </div>
    //             </div>
    //             <p class="mainDiscography__discography__dets__id">${discographyData[i].id}/${discographyData.length}</p>
    //         `;
    //     // } else{
    //     //     console.log("no?"); 
    //     //     // localStorage.setItem("album", `${discographyData[i].album_name}`);
    //     // }
    // }
    
    // IF NO PREVIOUS ALBUM
    if (i == 0){
        prev.style.display = "none";
    } else{
        prev.style.display = "block";
    }

    // IF NO NEXT ALBUM
    if (i == discographyData.length - 1){
        next.style.display = "none";
    } else{
        next.style.display = "block";
    }
}
// }

if(localStorage.getItem("album") != `${discographyData[i].album_name}`){
    divUnderMain.innerHTML = localStorage.getItem("album");
} else{
    console.log("no? 2"); 
}


divUnderMain.append(dets);