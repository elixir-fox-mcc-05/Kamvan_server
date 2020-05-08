const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/taskController.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authroziation.js');

router.get('/', authentication, TaskController.findAll);
router.post('/', authentication, TaskController.create);
router.put('/:id', authentication, authorization, TaskController.update);
router.delete('/:id', authentication, authorization, TaskController.destroy);

module.exports = router;