const router = require('express').Router()
const TaskController = require('../controllers/task')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', TaskController.findAll)
router.post('/', TaskController.create)

router.delete('/:id', TaskController.delete)

module.exports = router