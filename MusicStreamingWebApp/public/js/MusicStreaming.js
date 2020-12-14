

var searchObj = {
    artist: "",
    songTitle: "",
    album: "",
    genre: "",
};

//Client Socket IO
var socket = io.connect("http://localhost:3004/");

// Logging socket message to browser for connection and disconnection
socket.on('connection', function (msg) {
    console.log("Socket - connected");
    socket.on('disconnect',()=>{
        console.log('Disconnected...')
      })
});

socket.on('download', function (msg) {
    console.log(msg);
});




// variable to store DOM Div Elements and Favorite Button ID
var searchResultDomArray = [];

window.onload = () => {
    //adding listener to search button on page load
    document
        .querySelector("#btnSearch")
        .addEventListener("click", btnSearchClick);

    //adding listner to reset button on page load *new
    document.querySelector("#btnReset").addEventListener("click", btnResetClick);

    //adding listener to key up of artistName, songTitle, albumTitle and selectGenre
    document.getElementById("artistName")
        .addEventListener("keyup", isEnterPressed);

    document.getElementById("songTitle")
        .addEventListener("keyup", isEnterPressed);

    document.getElementById("albumTitle")
        .addEventListener("keyup", isEnterPressed);

    document.getElementById("selectGenre")
        .addEventListener("keyup", isEnterPressed);
};

//if Enter is pressed
let isEnterPressed = (event) => {
	event.preventDefault();
    if (event.keyCode === 13) {
        btnSearchClick();
    }
}

//reset btn click
let btnResetClick = () => {
    document.querySelector("#artistName").value = "";
    document.querySelector("#songTitle").value = "";
    document.querySelector("#albumTitle").value = "";
    document.querySelector("#selectGenre").value = "";
}


let btnSearchClick = () => {
    //storing search values artist, song,album and genre from ui 
    const genre = document.querySelector("#selectGenre").value;
    const artist = document.querySelector("#artistName").value;
    const title = document.querySelector("#songTitle").value;
    const album = document.querySelector("#albumTitle").value;

    if (artist == "" && title == "" && album == "" && genre == "") {
        alert("Please enter search criteria");
        return;
    }
    //server request for search
    const request = new Request(`http://localhost:3004/search/filtermusic?genre=${genre}&artist=${artist}&title=${title}&albulm=${album}`);

    fetch(request)
    .then(function(response) {
        return response.json();
    })
    .then(function (res) {
        console.log(res)
         loadData(res);
    })
    .catch(err => {
        console.error(err)
    });
    
    const loadData = (data) => {
        document.querySelector("#resultRow").innerHTML = "";
        //lopp for adding search tile in Dom for everyserach result
        for(const song of data) {
            console.log(song);
            createDomForSongTile(song);
        }
    }

};

function favoriteMusic(e) {
    id= this.parentElement.id.substring(6);
    let favNewDiv= this.parentNode.cloneNode(true);
    const request = new Request(`http://localhost:3004/search/favorite?id=${id}`);
    fetch(request)
        .then(function(response) {
            return response.json();
        })
        .then(function (res) {
            console.log(res)
            song = res;

            if(!song) {
                console.warn(`song ${id} not found, cannot add to favorties`);
                 return;
             }
                //const albumArt = searchResultDomArray.find(element => element.favourID === id)
                //const albumArt = searchResultDomArray[id];
                let favoriteRow = document.querySelector("#favoriteContainer");
                //let favNewDiv = albumArt['newDiv'].cloneNode(true);
                //let favNewDiv= this.parentNode.cloneNode(true);
                favoriteRow.appendChild(favNewDiv);
	            favNewDiv.querySelector(".album-poster").addEventListener("click", imgPosterClick);

        })
        .catch(err => {
            console.error(err)
        });

    //const albumArt = searchResultDomArray.find(element => element.favourID === this.id)
    /* let favoriteRow = document.querySelector("#favoriteContainer");
    let favNewDiv = albumArt['newDiv'].cloneNode(true);
    favoriteRow.appendChild(favNewDiv);
	favNewDiv.querySelector(".album-poster").addEventListener("click", imgPosterClick);
 */
};




//create dom elements for 1 song object
let createDomForSongTile = (songObj) => {
    let resultRowDiv = document.querySelector("#resultRow");
    let newDiv = document.createElement("div");
    newDiv.classList.add("col-md-3");
    newDiv.id = `newDiv${songObj.id}`;
    //console.log("new id" ,newDiv.id );

    let newAnchor = document.createElement("a");
    newAnchor.href = "#";
    //newAnchor.addEventListener("click", imgPosterClick);
    newAnchor.classList.add("album-poster");
    let newAlbumImg = document.createElement("img");
    newAlbumImg.classList.add("imgPoster");
    newAlbumImg.src = songObj.imageURL;
    newAlbumImg.alt = songObj.artist;
    newAnchor.appendChild(newAlbumImg);
    newDiv.appendChild(newAnchor);

    let newAlbumTitleP = document.createElement("p");
    newAlbumTitleP.classList.add("albumSetting");
    newAlbumTitleP.textContent = songObj.album;
    newDiv.appendChild(newAlbumTitleP);

    let newRatingImg = document.createElement("img");
    newRatingImg.classList.add("ratingStars");
    //case rating image basis value in songlist.rating
    switch (songObj.rating){
        case "5" : 
            newRatingImg.src = "Images/5Star.png";
            break;
        case "4": 
            newRatingImg.src = "Images/4Star.png";
            break;
        case "3": 
            newRatingImg.src = "Images/3Star.png";
            break;
        case "2": 
            newRatingImg.src = "Images/2Star.png";
            break;
        case "1": 
            newRatingImg.src = "Images/1star.png";
            break;
    };

    
    //newRatingImg.src = "Images/stars.png";
    newDiv.appendChild(newRatingImg);

    let newSongTitleH4 = document.createElement("h4");
    newSongTitleH4.textContent = songObj.songTitle;
    let newDurationSpan = document.createElement("span");
    newDurationSpan.textContent = songObj.duraion;
    newSongTitleH4.appendChild(newDurationSpan);
    newDiv.appendChild(newSongTitleH4);

    let newArtistP = document.createElement("p");
    newArtistP.textContent = songObj.artist;
    newDiv.appendChild(newArtistP);

    let newFavAnchor = document.createElement("a");
    newFavAnchor.href = "#";
    newFavAnchor.addEventListener("click", favoriteMusic);
    newFavAnchor.classList.add("favoriteBtnBelow");
    newFavAnchor.id = `favButton${songObj.id}`;
    let newFavImg = document.createElement("img");
    newFavImg.src = "Images/Favorite.png";
    newFavImg.alt = "";
    newFavAnchor.appendChild(newFavImg);
    newDiv.appendChild(newFavAnchor);

    let newDownloadAnchor = document.createElement("a");
    newDownloadAnchor.href = "#";
    newDownloadAnchor.addEventListener("click", anchorDownloadClick);
    newDownloadAnchor.classList.add("downloadBtnBelow");
    let newDownloadImg = document.createElement("img");
    newDownloadImg.src = "Images/Download1.png";
    newDownloadImg.alt = "";
    newDownloadAnchor.appendChild(newDownloadImg);
    newDiv.appendChild(newDownloadAnchor);

    let newGenreP = document.createElement("p");
    newGenreP.textContent = songObj.genre;
    newDiv.appendChild(newGenreP);

    resultRow.appendChild(newDiv);
    //console.log(newDiv);

    searchResultDomArray.push({
        favourID: newFavAnchor.id,
        newDiv: newDiv
    });

    //console.log(resultRow.innerHTML);
};

// Add label to the favourite music section
let favoriteLabelContainer = document.querySelector("#favouriteContainerLabel");
let favouriteLabel = document.createElement("h3");
favouriteLabel.classList.add("col-md-12");
favouriteLabel.classList.add("py-4");
favouriteLabel.textContent = "Favourite Music";

if (document.getElementById("favoriteContainer").addEventListener('DOMNodeInserted', () => {
        favoriteLabelContainer.appendChild(favouriteLabel)
    }));

function imgPosterClick(){
    if (this.parentElement.parentNode.id == "favoriteContainer")
        this.parentElement.parentElement.removeChild(this.parentElement);
}

function anchorDownloadClick(){
    alert("Download started.");
    var id= this.parentElement.id.substring(6);
    fetch(`http://localhost:3004/download?id=${id}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    //body: JSON.stringify(data),
    })  
    .then(function(response) {
        return response.json();
    })
    .then(function (res) {
        console.log(res);
        socket.emit('download-received', id);
    })
    .catch(err => {
        
    });

}

