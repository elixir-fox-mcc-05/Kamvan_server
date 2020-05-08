if(process.env.NODE_ENV.trim() === 'development'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');
const router = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);
app.use(errorHandler);

io.on('connection', socket => {
    console.log('new user connecting');
    socket.on('update-data', data => {
        socket.broadcast.emit('new-data', data);
    })
})

http.listen(PORT, ()=> {
    console.log(`App running at port ${PORT}`);
})