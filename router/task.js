let taskUser = require('express').Router()
let TaskCon = require('../controller/taskCon.js')
let autentication = require('../middelwares/authentication.js')


taskUser.use(autentication)
taskUser.get('/task', TaskCon.show)
taskUser.post('/task', TaskCon.add)
taskUser.patch('/task/:id', TaskCon.edit)
taskUser.delete('/task/:id', TaskCon.delete)

module.exports= taskUser