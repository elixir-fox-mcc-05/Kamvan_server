let router = require('express').Router()
let userRoutes = require('./user.js')
let taskRoute = require('./task.js')

router.get('/',(req,res)=>{
    res.send('masuk home')
})

router.use(userRoutes)
router.use('/task',taskRoute)


module.exports = router