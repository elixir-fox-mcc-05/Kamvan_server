const router = require('express').Router();
const TaskController = require('../controllers/TaskController.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

router.use(authentication);
router.get('/', TaskController.findAll);
router.post('/', TaskController.createTask);
router.put('/:id', authorization, TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

module.exports = router;