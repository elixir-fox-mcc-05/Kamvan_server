"use strict";
const router = require('express').Router();
const Authentication = require('../midllewares/authentication');
const Authorization = require('../midllewares/authorization');
const TaskController = require('../controller/taskcontroller');

router.use(Authentication);
router.post('/', TaskController.create);
router.get('/:category', TaskController.findAll);
router.get('/:id', Authorization, TaskController.findOne);
router.put('/:id', Authorization, TaskController.edit);
router.delete('/:id', Authorization, TaskController.delete);


module.exports = router;