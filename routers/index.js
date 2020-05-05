const router = require('express').Router();
const userRoute = require('./userRoute.js');
const taskRoute = require('./taskRoute.js');

router.use('/', userRoute);
router.use('/', taskRoute);

module.exports = router;