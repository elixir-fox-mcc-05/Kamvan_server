let router = require('express').Router()
let UserController = require('../controllers/user')

router.post('/login' ,UserController.login)
router.post('/register' ,UserController.register)
router.post('/googleLogin', UserController.googleLogin)

module.exports = router