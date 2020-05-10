const router = require('express').Router()
const Task = require('../controller/Task')
const Authentication = require('../middleware/authen')

router.get('/:id', Task.findAll)
router.use(Authentication)
router.post('/:id', Task.createTask)
router.delete('/:id', Task.destroy)

module.exports = router