const router = require('express').Router();
const usersRouter = require('./users.js');
const tasksRouter = require('./tasks.js');

router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);

module.exports = router