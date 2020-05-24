const router = require("express").Router();

const TaskController = require("../controllers/taskController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.get("/", TaskController.findAll);
router.get("/:id", TaskController.findOne);
router.use(authentication);
router.post("/", TaskController.create);
router.put("/:id", authorization, TaskController.update);
router.delete("/:id", authorization, TaskController.delete);
router.patch("/:id/category", authorization, TaskController.updateCategory);


module.exports = router;
