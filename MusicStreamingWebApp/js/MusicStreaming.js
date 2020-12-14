let songlist = [{
        id: 1,
        artist: "Ali Gatie",
        songTitle: "It is You",
        duraion: "02:52",
        album: "You",
        rating: "3",
        genre: "Soul",
        imageURL: "Images/Ali Gatie_Its you.jpeg",
    },
    {
        id: 2,
        artist: "Ali Gatie feat Alessia Cara",
        songTitle: "Welcome Back",
        duraion: "02:34",
        album: "Welcome Back",
        rating: "5",
        genre: "Soul",
        imageURL: "Images/Welcome Back _Ali Gatie feat Alessia Cara.jpeg",
    },
    {
        id: 3,
        artist: "Alicia Keys ",
        songTitle: "Truth Without Love",
        duraion: "03:23",
        album: "Alicia",
        rating: "5",
        genre: "Soul",
        imageURL: "Images/Alicia_Alicia Keys.jpg",
    },
    {
        id: 4,
        artist: "Alicia Keys ",
        songTitle: "Love Looks Better",
        duraion: "04:29",
        album: "Alicia",
        rating: "4",
        genre: "Soul",
        imageURL: "Images/Alicia_Alicia Keys.jpg",
    },
    {
        id: 5,
        artist: "Toni Braxton",
        songTitle: "Breathe Again",
        duraion: "04:18",
        album: "Breathe Again",
        rating: "5",
        genre: "Pop",
        imageURL: "Images/Breathe Again_Toni Braxton.jpg",
    },
    {
        id: 6,
        artist: "Toni Braxton Feat H.E.R.",
        songTitle: "Gotta Move On",
        duraion: "03:48",
        album: "Spell My Name",
        rating: "4",
        genre: "Soul",
        imageURL: "Images/Gotta Move On_Toni Braxton Ft. H.E.R.jpeg",
    },
    {
        id: 7,
        artist: "Ariana Grande feat Justin Bieber",
        songTitle: "Stuck with U",
        duraion: "03:27",
        album: "Stuck with U",
        rating: "5",
        genre: "Pop",
        imageURL: "Images/Stuck with you_Ariana Feat Justin Bieber.jpeg",
    },
    {
        id: 8,
        artist: "Ariana Grande",
        songTitle: "Thank u, next",
        duraion: "03:32",
        album: "Thank U, next",
        rating: "4",
        genre: "Pop",
        imageURL: "Images/Thank u, next_Ariana.jpeg",
    },
    {
        id: 9,
        artist: "Justin Bieber Ft. Chance The Rapper",
        songTitle: "Holy",
        duraion: "02:20",
        album: "Holy",
        rating: "5",
        genre: "Pop",
        imageURL: "Images/Holy, Justin Bieber feat Chance the Rapper.jpg",
    },
    {
        id: 10,
        artist: "Justin Bieber Ft. Iann Dior",
        songTitle: "Mood",
        duraion: "03:48",
        album: "Single (Mood)",
        rating: "4",
        genre: "Rap",
        imageURL: "Images/Mood_Justin Bieber ft. Iann Dior.jpg",
    },
    {
        id: 11,
        artist: "Koryn Hawthorne",
        songTitle: "Pray",
        duraion: "03:27",
        album: "Single (Pray)",
        rating: "5",
        genre: "Gospel",
        imageURL: "Images/Pray_Koryn Hawthorne.jpeg",
    },
    {
        id: 12,
        artist: "Jeremy Camp",
        songTitle: "Keep Me in The Moment",
        duraion: "04:20",
        album: "Single(Keep Me in The Moment)",
        rating: "4",
        genre: "Gospel",
        imageURL: "Images/Keep me in the moment_Jeremy Camp copy.jpg",
    },
    {
        id: 13,
        artist: "Elevation Worship",
        songTitle: "Graves in the Garden",
        duraion: "03:57",
        album: "Graves into Gardens - EP",
        rating: "5",
        genre: "Gospel",
        imageURL: "Images/Graves in Garden_Elevation Worship.jpeg",
    },
    {
        id: 14,
        artist: "Fransesca Battistelli",
        songTitle: "This Change Everything",
        duraion: "02:47",
        album: "Own It",
        rating: "4",
        genre: "Vocal",
        imageURL: "Images/OwnIT_Francesca Attistelli.jpeg",
    },
    {
        id: 15,
        artist: "Austin French",
        songTitle: "Wake Up Sleeper",
        duraion: "04:09",
        album: "Single - Wake Up Sleeper",
        rating: "5",
        genre: "Gospel",
        imageURL: "Images/WakeUPSleeper_Austin French.jpeg",
    },
    {
        id: 16,
        artist: "Natalie Grant",
        songTitle: "Face to Face",
        duraion: "04:12",
        album: "Single-Face to Face",
        rating: "4",
        genre: "Gospel",
        imageURL: "Images/Face to Face_Natalie Grant.jpeg",
    },
    {
        id: 17,
        artist: "MercyMe",
        songTitle: "Almost Home",
        duraion: "04:36",
        album: "Single - Almost Home",
        rating: "5",
        genre: "Gospel",
        imageURL: "Images/AlmostHome_MercyME.jpeg",
    },
    {
        id: 18,
        artist: "Rudy Currence",
        songTitle: "I belong Here",
        duraion: "03:09",
        album: "Single - I belong Here",
        rating: "4",
        genre: "Vocal",
        imageURL: "Images/I Belong Here_Rudy Currence.jpeg",
    },
    {
        id: 19,
        artist: "Ed Williams",
        songTitle: "Right Here",
        duraion: "04:06",
        album: "Single - Right Here",
        rating: "5",
        genre: "Gospel",
        imageURL: "Images/EdWilliams.jpeg",
    },
    {
        id: 20,
        artist: "The Clarke Sisters, Snoop Dogg",
        songTitle: "His Love",
        duraion: "04.06",
        album: "The Return",
        rating: "4",
        genre: "Vocal",
        imageURL: "Images/The Return_Clarke Sisters.jpeg",
    },
];

var searchObj = {
    artist: "",
    songTitle: "",
    album: "",
    genre: "",
};

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

//Search button click function that also include the event listener for the favorite button
let btnSearchClick = () => {
    //storing search values artist, song,album and genre from ui
    searchObj.artist = document.querySelector("#artistName").value;
    searchObj.songTitle = document.querySelector("#songTitle").value;
    searchObj.album = document.querySelector("#albumTitle").value;
    searchObj.genre = document.querySelector("#selectGenre").value;
    //search logic
    if (searchObj.artist == "" && searchObj.songTitle == "" && searchObj.album == "" && searchObj.genre == "") {
        alert("Please enter search criteria");
        return;
    }
    //clearing search result *new
    document.querySelector("#resultRow").innerHTML = "";
    
    let SearchResult = songlist.filter(function(item) {
        for (var key in searchObj) {
            if (
                item[key] === undefined ||
                !item[key].toLowerCase().includes(searchObj[key].toLowerCase())
            ) {
                return false;
            }
        }
        return true;
    });
    console.log(SearchResult);

    console.log(searchResultDomArray);

    //write a loop to call createDomForSongTile
    for (let i = 0; i < SearchResult.length; i++)
        createDomForSongTile(SearchResult[i]);

};



function favoriteMusic() {
    const albumArt = searchResultDomArray.find(element => element.favourID === this.id)
    let favoriteRow = document.querySelector("#favoriteContainer");
    let favNewDiv = albumArt['newDiv'].cloneNode(true);
    favoriteRow.appendChild(favNewDiv);
	favNewDiv.querySelector(".album-poster").addEventListener("click", imgPosterClick);

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
    //console.log("favourate icon id" ,newFavAnchor.id )
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
}

