var express = require('express')
var router = express.Router()

// router.use(authentication)
router.get("/", taskController.getAllTasks)
router.get("/:id", taskController.getOneTask)
router.post("/", taskController.addTask)

// authorization
router.put("/:id", taskController.editOneTaskDetail)
router.patch("/:id", taskController.editTaskCategory)
router.delete("/:id", taskController.deleteOneTask)

module.exports = router