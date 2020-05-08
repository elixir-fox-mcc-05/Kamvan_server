const router = require('express').Router()
const UserController = require('../controllers/userController')
const task = require('./task')

router.use('/tasks',task)
router.get('/login',UserController.login)
router.post('/login',UserController.login)
router.post('/register', UserController.register)
router.post('/googlelogin', UserController.googleLogin)

module.exports = router