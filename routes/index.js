const router = require("express").Router()
const user = require("./user")
const task = require("./task")

router.use("/task",task)
router.use("/user",user)
module.exports = router