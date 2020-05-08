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

router.get('/tasks/:taskId', authorization, Controller.task_id)
router.put('/tasks/:taskId', authorization, Controller.edit_task)
router.delete('/tasks/:taskId', authorization, Controller.delete_task)

module.exports = router