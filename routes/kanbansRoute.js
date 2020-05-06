const express = require('express');
const router = express.Router();
const KanbanController = require('../controllers/KanbanController.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');


router.post('/', authentication, KanbanController.create);
router.get('/', authentication, KanbanController.findAll);

module.exports = router;