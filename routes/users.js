const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const { authentication } = require('../middlewares/authentication')

router.get('/', authentication, usersController.getAll)
router.post('/register', usersController.register)
// router.get('/google-login', usersController.googleLogin)
router.post('/login', usersController.login)

module.exports = router