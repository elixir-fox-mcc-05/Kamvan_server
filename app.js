if (process.env.NODE_ENV == 'development') {
  require('dotenv').config();
}
const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routes');
const errHandler = require('./middlewares/errHandler.js');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);

io.on('connection', socket => {
  console.log('New client connected');

  socket.on('incoming category', data => {
    socket.broadcast.emit('outgoing category', { num: data });
  });

  socket.on('disconnect', () => console.log('Client disconnected'));
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(router);
app.use(errHandler);

server.listen(port, () => {
  console.log('Kamvan server at port', port);
});
