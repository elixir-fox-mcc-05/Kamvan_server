let router = require('express').Router()
let userRouter = require('./user')
let taskRouter = require('./task')

router.use('/user', userRouter)
router.use('/task', taskRouter)

module.exports = router