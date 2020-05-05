const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 3000
const router = require('./router')
const errHandler = require('./middleware/errHandler')
require('dotenv').config()


app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use(router)
app.use(errHandler)

app.listen(port, console.log('listening port: ', port))