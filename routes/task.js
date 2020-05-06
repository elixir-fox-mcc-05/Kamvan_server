const router = require('express').Router()

const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

// general
router.get('/tasks', Controller.task)

// authenctication
router.use(authentication)

router.post('/tasks', Controller.new_task)

// authorization
router.use(authorization)

router.get('/tasks/:taskId', Controller.task_id)
router.delete('/tasks/:taskId', Controller.delete_task)

module.exports = router