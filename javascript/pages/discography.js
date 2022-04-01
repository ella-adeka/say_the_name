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

    function prevAlbum() {
        if (i !== 0) {
            i--;
        } 
    }

    function nextAlbum() {
        if (i < discographyData.length) {
            i++;
        } 
    }

    prev.addEventListener("click", () => {
        prevAlbum();
        showAlbums();
    });

    next.addEventListener("click", () => {
        nextAlbum();
        showAlbums();
    });
    
        
    function showAlbums() {
        if (i<discographyData.length) {
            let songList = discographyData[i].tracks.length;
            let track = "<ol class='mainDiscography__discography__dets__details__paragraph__track_list__ol'>";
            for (let j = 0; j < songList; j++) {
                track  += "<li class='mainDiscography__discography__dets__details__paragraph__track_list__ol__li'>" + discographyData[i].tracks[j] + "</li>";
            }
            track+= "</ol>";

            listenLink.setAttribute('href',`${discographyData[i].album_link}`);
            watchLink.setAttribute('href',`${discographyData[i].youtube_link}`);

            dets.innerHTML = `
            <p class="mainDiscography__discography__dets__album_category">${discographyData[i].category}</p>
                <p class="mainDiscography__discography__dets__album_name">${discographyData[i].album_name}</p>
                <p class="mainDiscography__discography__dets__title_track">${discographyData[i].title_track}</p>
                <div class="mainDiscography__discography__dets__details">
                    <div class="mainDiscography__discography__dets__details__imageDiv">
                        <img class="mainDiscography__discography__dets__details__imageDiv__image" src=./images/discography/${discographyData[i].image} />
                        <br>
                        <br>
                        <br>
                    </div>
                    <div class="mainDiscography___discography_dets__details__paragraph">
                        <p class="mainDiscography__discography__dets__details__paragraph__album_detail">${discographyData[i].album_detail}</p>
                        <p class="mainDiscography__discography__dets__details__paragraph__artist_name">${discographyData[i].artist_name}</p>
                        <p class="mainDiscography__discography__dets__details__paragraph__release_date">${discographyData[i].release_date}</p>
                        <p class="mainDiscography__discography__dets__details__paragraph__track_list">${track}</p>
                    </div>
                </div>
                <p class="mainDiscography__discography__dets__id">${discographyData[i].id}/${discographyData.length}</p>
            `;
        }
        
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
    
divUnderMain.append(dets);