const router = require('express').Router()
// require tasl and user
const user = require('./user')
const task = require('./task')

// connect to user and task
router.use(user)
router.use(task)

module.exports = router