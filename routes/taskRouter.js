const router = require("express").Router();

const TaskController = require("../controllers/taskController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.use(authentication);
router.get("/", TaskController.findAll);
router.post("/", TaskController.create);
router.put("/:id", authorization, TaskController.update);
router.get("/:id", authorization, TaskController.findOne);
router.delete("/:id", authorization, TaskController.delete);

module.exports = router;
