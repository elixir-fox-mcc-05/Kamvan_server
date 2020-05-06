"use strict";
const router = require('express').Router();
const Authentication = require('../midllewares/authentication');
const Authorization = require('../midllewares/authorization');
const TaskController = require('../controller/taskcontroller');

router.use(Authentication);
router.get('/:category', TaskController.findAll);
router.post('/:category', TaskController.create);

module.exports = router;