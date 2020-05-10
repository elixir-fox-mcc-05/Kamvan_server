let UserCon = require('../controller/userCon.js')
let userRoutes = require('express').Router()

userRoutes.post('/login', UserCon.login)
userRoutes.post('/register', UserCon.register)
userRoutes.get('/getOrgList' , UserCon.userRegOrgList)



module.exports = userRoutes