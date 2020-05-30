const http = require("./http")
const io = require("socket.io")(http)
const TaskController = require('./controllers/taskController')
const UserController = require('./controllers/userController')
const express = require("express")
const app = express()
const router = require('./router')

io.of('/register').on('connection',function(socket){
    console.log('test')
})

app.use(router)


io.on('connection', function(socket){
    console.log('connected')
    socket.on('login', function(data){
        console.log('yusak')
        UserController.login(data, function(err, results){
            if(err){
                socket.emit('show-error', err)
            }else{
                socket.emit('show-loginresults', results)
            }
        })
    })

    socket.on('register', function(data){
        UserController.register(data, function(err,results){
            if(err){
                socket.emit('show-error',err)
            }else{
                socket.emit('show-registerresults', results)
            }
        })
    })

})