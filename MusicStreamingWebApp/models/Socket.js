var mongoose = require("mongoose");
const Schema = mongoose.Schema;

// socketSchema created and converted to model
const socketSchema = new Schema({
    socket: String, // the connected socket id
    type: String, //type of event either ‘Connection’ or ‘Disconnect’
    eventTime: Date //the time the download request occurred on the server
});

const SocketEvent = mongoose.model('SocketEvent', socketSchema);

module.exports = SocketEvent;