const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.post('/register', usersController.register)
// router.get('/google-login', usersController.googleLogin)
router.post('/login', usersController.login)

module.exports = router