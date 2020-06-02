const router = require('express').Router()
const User = require('../controller')

router.post('/signup', User.signUp)
router.post('/signin', User.signIn)

module.exports = router