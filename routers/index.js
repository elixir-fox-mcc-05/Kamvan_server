const router = require('express').Router();
const userRoute = require('./userRoute.js');
const taskRoute = require('./taskRoute.js');

router.use('/users', userRoute);
router.use('/tasks', taskRoute);

module.exports = router;