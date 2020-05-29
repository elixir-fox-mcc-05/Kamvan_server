const express = require('express')
const app = express()
const port = process.env.PORT || 3001
// const io = require('socket.io').listen(port, console.log('listening port: ', port))

const cors = require('cors')
const errHandler = require('./middleware/errHandler')
require('dotenv').config()
// var http = require('http');
var server = app.listen(process.env.PORT || 3000);
const io = require('socket.io')(server)
const router = require('./router')(io)

// app.set('socketio', io);



// io.sockets.on('connection', function (socket) {
//     console.log('client connect');
//     socket.on('echo', function (data) {
//     io.sockets.emit('message', data);
//  });
// });

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

// app.io = io

app.use(router)
app.use(errHandler)

io.on('connection', ()=> {
    console.log('client connect');
    // socket.emit('id', socket.id) // send each client their socket id
  })





app.listen(port, console.log('listening port: ', port))