require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT
const cors = require("cors")
const routes = require("./routes")
const http = require("http").Server(app)
const io = require("socket.io")(http)

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(routes)

http.listen(PORT,()=>{
    console.log("listen:" + PORT);
    
})
io.on('connection', function (socket) {    
    socket.on('msg', ()=> io.emit('drserver'));
});




