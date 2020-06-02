const router = require('express').Router()
const user = require('./user')
const task = require('./task')



router.use('/users', user)
router.use('/tasks', task)

module.exports = router