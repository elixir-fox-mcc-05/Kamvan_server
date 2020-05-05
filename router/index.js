const router = require('express').Router()
const UserController = require('../controllers/userController')
const todo = require('../router/todo')

router.use('/todo',todo)
router.post('/login',UserController.login)
router.post('/register', UserController.register)

module.exports = router