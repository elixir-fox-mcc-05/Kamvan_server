if (process.env.NODE_ENV.trim() === 'development') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routers');
const http = require('http');
let server = http.createServer(app);
const { errHandler } = require('./middlewares/errHandler.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(errHandler);

server.listen(PORT, () => console.log(`Organize yourself at PORT: ${PORT}`));
