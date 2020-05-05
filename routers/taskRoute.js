const router = require('express').Router();
const TaskController = require('../controllers/taskController.js');
const { authenticateUser } = require('../middlewares/authentication.js');
const { authorizeUser } =require('../middlewares/authorization.js');

router.use(authenticateUser);
router.get('/', TaskController.getAllTask);
router.post('/', TaskController.addNewTask);
router.put('/:id', authorizeUser, TaskController.updateTask);
router.delete('/:id', authorizeUser, TaskController.deleteTask);

module.exports = router;
