require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const router = require('./routes/index.js');
const errHandler = require('./middlewares/errHandler.js');

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(router);
app.use(errHandler);

app.listen(port, () => {
    console.log(`listening to port:`, port);
})