const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const authorization = require('../middleware/authorization')
const authentication = require('../middleware/authentication')

router.use(authentication)
router.get('/',TaskController.list)
router.post('/add',TaskController.add)
router.get('/:id',TaskController.select)
router.delete('/delete/:id',authorization, TaskController.delete)
router.put('/update/:id',authorization, TaskController.update)

module.exports = router