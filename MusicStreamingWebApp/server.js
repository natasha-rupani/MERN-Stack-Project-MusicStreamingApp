const express = require('express');
const mongoose = require("mongoose");
const DownloadEvent = require('./models/Download');
const SocketEvent = require('./models/Socket');
const musicFactory = require('./modules/musicFactory');
const path = require('path')
var bodyParser = require('body-parser');
const {
    disconnect
} = require('process');
const app = express();
const url = require('url');
const http = require('http').Server(app);
const Schema = mongoose.Schema;
const connectionString = "mongodb://localhost:27444/musicStreamingapp?readPreference=primary&appname=MongoDB%20Compass&ssl=false";


app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

musicFactory.init();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/MusicStreaming.html'));
})

//Updating Routing using url to pass res.query

app.get('/search/filterMusic', function(req, res) {
    res.redirect(url.format({
        pathname: "/filterMusic",
        query: req.query,
    }));
})
app.get('/search/favorite', function(req, res) {
    res.redirect(url.format({
        pathname: "/favorite",
        query: req.query,
    }));
})

app.get('/filterMusic', function(req, res) {
    const queryStr = req.query;
    console.log(queryStr)
    const data = musicFactory.mfSearchSong(queryStr.genre, queryStr.band, queryStr.title, queryStr.album)
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
})

app.get('/favorite', (req, res) => {
    const queryStr = req.query;
    console.log(queryStr)
    const song = musicFactory.addFavorite(queryStr.id);
    res.status(200);
    res.send(JSON.stringify(song));
})

app.post('/download', (req, res) => {
    //const params = req.body;
    // console.log(params);
    const queryStr = req.query;
    console.log(queryStr)
    musicFactory.downloadSong(queryStr.id);
    res.status(200);
    res.send(`Downloaded song with id: ${queryStr.id}`);
})


var server = http.listen(3004, function() {
    console.log('Listening on port 3004!')
})

const io = require("socket.io").listen(server);

// Mongoose connection 
mongoose
    .connect(connectionString, {
        useNewUrlParser: true
    })
    .then(() => {
            console.log("Mongoose connected successfully ");
        },
        error => {
            console.log("Mongoose could not connected to database : " + error);
        }
    );

io.on('connection', socket => {
    console.log("Connection Accepted.");
    var SocketEventConnected = new SocketEvent({
        socket: socket.id,
        type: "Connection",
        eventTime: Date.now()
    })
    SocketEventConnected.save()
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    socket.emit('connection', "");


    socket.on('disconnect', () => {
        console.log('Disconnected...')
    })

    io.on('download-received', function(id) {
        var downloadEvent = new DownloadEvent({
            socket: socket.id,
            songId: id,
            downloadTime: Date.now()
        })
        downloadEvent.save()
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        console.log(`Socket - Received client message to download music id: ${id}`);
        socket.emit('download', `Socket - Download received from server with id: ${id}`);
    });
});




app.post('/download', (req, res) => {
    const params = req.body;
    console.log(params);
    musicFactory.downloadSong(params.id);
    res.status(200);
    res.send(`Downloaded song with id: ${params.id}`);
})