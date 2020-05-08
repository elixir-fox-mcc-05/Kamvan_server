var express = require('express')
var router = express.Router()
const userRoutes = require("../routes/userRoutes.js")
const taskRoutes = require("../routes/taskRoutes.js")

router.get('/', function(req, res) {
    res.status(200).json({
        message: 'Home Domain Connected'
    })
})
router.use('/', userRoutes)
router.use('/tasks', taskRoutes)

module.exports = router