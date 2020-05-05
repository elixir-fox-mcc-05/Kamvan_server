const router = require('express').Router()
const UserController = require('../controllers/UserController')
const GoogleController = require('../controllers/GoogleController')
router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleLogin', GoogleController.googleSign)
module.exports = router