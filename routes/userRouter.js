const express = require('express');
const router = express.Router();
const UserController = require('../constrollers/userController.js');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

module.exports = router