const express = require('express');
const router = express.Router();
const KanbanController = require('../controllers/KanbanController.js');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

router.patch('/:kanbanid/category', authentication, authorization, KanbanController.updateCategory);
router.delete('/:kanbanid', authentication, authorization, KanbanController.delete);
router.patch('/:kanbanid', authentication, authorization, KanbanController.update);
router.post('/', authentication, KanbanController.create);
router.get('/', authentication, KanbanController.findAll);

module.exports = router;