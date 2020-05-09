const router = require('express').Router()

const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

// general
router.get('/', Controller.task)

// authenctication
router.use(authentication)

router.post('/', Controller.new_task)

// authorization

router.get('/:taskId', authorization, Controller.task_id)
router.put('/:taskId', authorization, Controller.edit_task)
router.delete('/:taskId', authorization, Controller.delete_task)

module.exports = router