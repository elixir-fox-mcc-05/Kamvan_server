if (process.env.NODE_ENV == 'dev') {
    require('dotenv').config()
}

require('dotenv').config()
let express = require ('express')
let app = express()
let port = 3000
let router = require('./routers/index')
let cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(router)

app.listen(port, ()=> {
    console.log('tis on port',port);
})