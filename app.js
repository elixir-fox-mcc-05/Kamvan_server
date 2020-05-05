let express = require('express')
let app = express()
let router = require('./router')
let port = 3000

app.use(express.urlencoded({ extended:false }))
app.use(router)



app.listen(port,()=>{
    console.log('app listen to port',port)
})