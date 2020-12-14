const {
    json
} = require("body-parser");

var songlist = [];

const seedData = () => {
    songlist = [{
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
}

var searchObj = {
    artist: "",
    songTitle: "",
    album: "",
    genre: "",
};


let mfSearchSong = (genre, band, title, album) => {
    band ? (searchObj.artist = band) : (searchObj.artist = "");
    title ? (searchObj.songlist = band) : (searchObj.songTitle = "");
    album ? (searchObj.album = album) : (searchObj.album = "");
    genre ? (searchObj.genre = genre) : (searchObj.genre = "");


    let SearchResult = songlist.filter(function(item) {
        for (var key in searchObj) {
            if (
                item[key] === undefined || !item[key].toLowerCase().includes(searchObj[key].toLowerCase())
            ) {
                return false;
            }
        }
        return true;
    });
    console.log(SearchResult);
    return SearchResult;
}

const init = () => {
    seedData();
    console.log(`Init called - music data created..`);
}

const addFavorite = (id) => {
    const song = songlist.filter(s => s.id == id);
    if (!song || song.length === 0) {
        console.error(`song with not found!!`);
        return null;
    }
    console.log(`Add favorite song - id: ${song[0].id}, artist: ${song[0].band}, title: ${song[0].title}`);
    return song;
}
const downloadSong = (id) => {
    const song = songlist.filter(s => s.id == id);
    if (!song || song.length === 0) {
        console.error(`song with not found!!`);
        return null;
    }
    console.log(`Download song - id: ${song[0].id}, artist: ${song[0].band}, title: ${song[0].title}`);
}

module.exports = {
    init: init,
    mfSearchSong: mfSearchSong,
    addFavorite: addFavorite,
    downloadSong: downloadSong
}