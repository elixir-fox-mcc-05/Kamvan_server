const express = require('express');
const router = express.Router();

const tasksRouter = require('./tasks');
const usersRouter = require('./users.js');

const {User, Task} = require('../models')

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'masuk'
    })
});
router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);

module.exports = router;
