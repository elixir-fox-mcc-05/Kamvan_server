const router = require('express').Router()
const TaskController = require('../controllers/task')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TaskController.findAll)
router.post('/', TaskController.create)

router.patch('/up/:id', authorization, TaskController.increaseCategory)
router.patch('/down/:id', authorization, TaskController.decreaseCategory)
router.delete('/:id', authorization, TaskController.delete)

module.exports = router