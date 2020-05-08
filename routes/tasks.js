const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController')
const { authentication } = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', tasksController.findAll)
router.post('/', tasksController.createTask)
router.get('/:id', authorization, tasksController.findById)
router.put('/:id', authorization, tasksController.updateTask)
router.patch('/:id', authorization, tasksController.changeCategory)
router.delete('/:id', authorization, tasksController.deleteTask)

module.exports = router