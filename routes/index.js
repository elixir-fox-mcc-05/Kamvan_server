var express = require('express')
var router = express.Router()
const userRoutes = require("../routes/userRoutes.js")
const taskRoutes = require("../routes/taskRoutes.js")

router.use('/', userRoutes)
router.use('/task', taskRoutes)

module.exports = router