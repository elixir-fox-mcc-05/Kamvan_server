const express = require('express');
const router = express.Router();
const TaskController = require('../constrollers/taskController.js');

// router.use(authentication)
router.post('/', TaskController.createTask);
router.get('/', TaskController.readAllTask);
// authorization
router.put('/:taskId', TaskController. updateTask);
router.delete('/:taskId', TaskController.deleteTask);

module.exports = router;