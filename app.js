// loading modules
var express = require('express');

var http = require('http');
var app = express();
// var server = express.createServer()
var server = http.createServer(app);
var io = require('socket.io').listen(server);
const cors = require('cors')
require('dotenv').config()
//routers
var router = require('./router')(io);




// Setup serving static assets
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use('/', router);

// Setup initial routing - index

io.on('connection', function(socket) {
    // socket.handshake.headers
    console.log(`socket.io connected: ${socket.id}`);
    
    // save socket.io socket in the session
    // console.log("session at socket.io connection:\n", socket.request.session);
    // socket.request.session.socketio = socket.id;
    // socket.request.session.save();
});


// Start the server
server.listen(3000, function(){
 console.log('App listening at http://localhost:3000');
});