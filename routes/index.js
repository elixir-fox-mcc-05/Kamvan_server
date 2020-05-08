const router = require('express').Router()
// require tasl and user
const user = require('./user')
const task = require('./task')

// connect to user and task
router.get('/', (req, res) => { res.json({ msg: 'routes here' }) } )
router.use('/', user)
router.use('/tasks', task)

module.exports = router