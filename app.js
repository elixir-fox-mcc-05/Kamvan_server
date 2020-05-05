// if(process.env.NODE_ENV == 'development'){
  require('dotenv').config()   
// }
const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./routes');
const errHandler = require('./middlewares/errHandler.js');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(router);
app.use(errHandler);

app.listen(port, () => {
  console.log("Kamvan server at port", port);
});