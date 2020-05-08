let router = require('express').Router()
let userRouter = require('./user')
let taskRouter = require('./task')
router.get('/',(req,res) => {
    res.json({msg: 'welcome home'})
})
router.use('/user', userRouter)
router.use('/task', taskRouter)

module.exports = router