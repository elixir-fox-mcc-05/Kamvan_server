const router = require('express').Router();
const userRouter = require('./users.js');
const taskRouter = require('./tasks.js');
const categoryRouter = require('./category.js');

router.get('/', () => {
  console.log("Kamvan Board");
});
router.use('/', userRouter);
router.use('/tasks', taskRouter);
router.use('/category', categoryRouter);

module.exports = router;