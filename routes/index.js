const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter.js');
const taskRouter = require('./taskRouter.js');

router.get('/', (req, res) => {
    res.status(200).json({
        message: `Kanban server working`
    })
})
router.use('/users', userRouter);
router.use('/tasks', taskRouter);

module.exports = router;