var mongoose = require("mongoose");
const Schema = mongoose.Schema;

// DowloadSchema created and converted to model
const DownloadSchema = new Schema({
    socket: String, // the connected socket id
    songId: String, //the id of the requested song to download
    downloadTime: Date //the time the download request occurred on the server
});

const DownloadEvent = mongoose.model('DownloadEvent', DownloadSchema);

module.exports = DownloadEvent;