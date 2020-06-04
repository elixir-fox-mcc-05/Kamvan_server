if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
} 

const express = require('express');
const app = express();
const port= process.env.PORT || 3000;
const cors = require('cors')
const ErrorHandler = require('./middlewares/errorhandler.js')
const http = require('http')
const server = http.createServer(app)
const route = require('./routes/index.js')
const io = require('socket.io')(server)

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    req.io = io
    next()
})
app.use('/', route);
app.use(ErrorHandler);

io.on('connection', function (socket) {
    console.log('Client Enter Server')

    // socket.on('user-connect', function (data) {
    //     console.log(data)
    // })
})

server.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

// app.listen(port, () => {
//     console.log(`listening to port ${port}`);
// });