require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/index.js');
const port = process.env.PORT
const errHandler = require('./middlewares/errHandler')
const cors = require('cors')
// const path = require('path');

app.use(cors())
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router)
app.use(errHandler)

app.listen(port, () => {
    console.log(`app listen to port ${port}`)
})