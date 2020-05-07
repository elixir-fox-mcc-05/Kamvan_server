// if (process.env.NODE_ENV.trim() === 'dev') {
//     require('dotenv').config()
// } 
// weird incompatibility issue here
// config.use_env_variable is undefined when NODE_ENV is set to 'dev'

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const router = require('./routers')
const handler = require('./middlewares/errorHandler')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use(router)
app.use(handler)

app.listen(PORT, _=> console.log('Stephanie Poetri - I love you', PORT));
