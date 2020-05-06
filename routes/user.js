const router = require('express').Router()

const Controller = require('../controllers/controller')

const authentication = require('../middlewares/authentication')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post('/logged', authentication, Controller.logged)

module.exports = router