const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController')
// const { authentication } = require('../middlewares/authentication')
// const authorization = require('../middlewares/authorization')

// router.use(authentication)
router.get('/', tasksController.findAll)
router.post('/', tasksController.createTask)
router.get('/:id', tasksController.findById)
router.put('/:id', tasksController.updateTask)
router.delete('/:id', tasksController.deleteTask)

module.exports = router