require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const router = require("./routes/index.js")
const errorHandler = require("./middlewares/errorHandler.js")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

app.use(router)
// app.get('/', (req, res) => res.send('Hello World!'))

app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))