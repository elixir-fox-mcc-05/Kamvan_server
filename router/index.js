module.exports = function(io){
    
const router = require('express').Router()
const UserController = require('../controllers/userController')(io)
const task = require('./task')(io)

router.use('/tasks',task)
// router.get('/login',UserController.login)
router.post('/login',UserController.login)
router.post('/register', UserController.register)
router.post('/googlelogin', UserController.googleLogin)

return router
}