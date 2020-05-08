const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.post('/google-login', UserController.googleLogin);
router.post('/login', UserController.login);
router.post('/register', UserController.register);
module.exports = router;