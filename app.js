let express = require('express')
let app = express()
let router = require('./router')
let port = 3000
let cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(router)



app.listen(port,()=>{
    console.log('app listen to port',port)
})