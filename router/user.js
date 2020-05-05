let UserCon = require('../controller/userCon.js')
let userRoutes = require('express').Router()

userRoutes.post('/login', UserCon.login)
userRoutes.post('/register', UserCon.register)



module.exports = userRoutes