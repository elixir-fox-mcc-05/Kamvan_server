var express = require('express')
var router = express.Router()
const taskController = require("../controllers/taskController.js")
const authentication = require("../middlewares/authentication.js")
const authorization = require("../middlewares/authorization.js")

router.use(authentication)
router.get("/", taskController.getAllTasks)
router.get("/:id", taskController.getOneTask)
router.post("/", taskController.addTask)

// authorization
router.put("/:id", authorization, taskController.editOneTaskDetail)
router.patch("/:id", authorization, taskController.editTaskCategory)
router.delete("/:id", authorization, taskController.deleteOneTask)

module.exports = router