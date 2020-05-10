'use strict'
const router = require(`express`).Router();

const TodoController = require(`../controllers/todocontroller.js`);
const { authenticate, authorize } = require(`../middlewares/userauth`)

router.post(`/`, authenticate, TodoController.create)
router.get (`/`, authenticate, TodoController.getTodos)
router.get (`/status/:status`, authenticate, TodoController.getTodosByStatus)
router.get (`/:id`, authenticate, TodoController.getOneTodo)
router.put (`/:id`, authenticate, authorize, TodoController.updateTodo)
router.put (`/:id/:status`, authenticate, authorize, TodoController.setStatus)
router.delete(`/:id`, authenticate, authorize, TodoController.deleteTodo)

module.exports = router