const express = require('express');
const router = express.Router();
const usersRoute = require('./usersRoute.js');
const kanbanRoute = require('./kanbansRoute.js');

router.use('/kanbans', kanbanRoute);
router.use('/users', usersRoute);

module.exports = router;