const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js')

router.use('/', authentication);
router.get('/', taskController.findAll);
router.post('/', taskController.create);
router.delete('/:id', authorization, taskController.delete)

module.exports = router;