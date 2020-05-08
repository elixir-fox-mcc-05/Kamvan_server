const express = require('express');
const router = express.Router();

const UserRouter = require('./userRouter.js');
const TaskRouter = require('./taskRouter.js');

router.use('/', UserRouter);
router.use('/tasks', TaskRouter);

module.exports = router;
