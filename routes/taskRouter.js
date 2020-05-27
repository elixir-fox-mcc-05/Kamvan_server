const express = require('express');
const router = express.Router();
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js'); // already checking userorganization & userid in here
const TaskController = require('../constrollers/taskController.js');

router.use(authentication)
router.post('/', TaskController.createTask);
router.get('/', TaskController.readAllTask);
router.get('/:taskId', authorization, TaskController.searchTask); 
router.put('/:taskId', authorization, TaskController.updateTask);
router.delete('/:taskId', authorization, TaskController.deleteTask);

module.exports = router;