const router = require('express').Router()
const allController = require('../controllers/allController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.post('/register', allController.register)
router.post('/login', allController.Login)
router.post('/google-login', allController.googleLogin)
router.use(authentication)
router.post('/task', allController.createTask)
router.get('/task',allController.readTask)
router.put('/task/:id', authorization, allController.updateTask)
router.delete('/task/:id', authorization, allController.deleteTask)

module.exports = router