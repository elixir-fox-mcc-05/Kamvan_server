const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController.js');

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.post('/google-signin', UserController.googleSignIn)

module.exports = router;