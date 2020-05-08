let taskUser = require('express').Router()
let TaskCon = require('../controller/taskCon.js')
let autentication = require('../middelwares/authentication.js')
let authorization = require('../middelwares/authorization.js')


taskUser.use(autentication)
taskUser.get('/', TaskCon.show)
taskUser.post('/', TaskCon.add)
taskUser.patch('/:id',authorization, TaskCon.edit)
taskUser.delete('/:id',authorization, TaskCon.delete)

module.exports= taskUser