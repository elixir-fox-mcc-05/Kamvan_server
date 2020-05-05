const express = require('express');
const router = express.Router();
const taskRouter = require('./task.js');
const userRouter = require('./user.js');

router.get('/', () => {
    console.log("Welcome to Kanban App");
  });
router.use('/task', taskRouter);
router.use('/user', userRouter);

module.exports = router;