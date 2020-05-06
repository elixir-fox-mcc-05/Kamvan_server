if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
} 

const express = require('express');
const app = express();
const port= process.env.PORT || 3000;
const route = require('./routes/index.js');
const cors = require('cors')
const ErrorHandler = require('./middlewares/errorhandler.js');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', route);
app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});