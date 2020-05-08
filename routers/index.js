const express = require('express');
const router = express.Router();
const taskRouter = require('./task.js');
const userRouter = require('./user.js');
const statRouter = require('./stat.js')

router.get('/', () => {
    console.log("Welcome to Kanban App");
  });
router.use('/task', taskRouter);
router.use('/user', userRouter);
router.use('/stat', statRouter);

module.exports = router;