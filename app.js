if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}

const errorHandler = require('./helpers/errorHandler')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => { console.log('run port', PORT) })