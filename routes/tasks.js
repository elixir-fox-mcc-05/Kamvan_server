const router = require('express').Router();
const TaskController = require('../controllers/TaskController.js');
const { authenticateUser } = require('../middlewares/authentication.js');
const { authorizeUser } = require('../middlewares/authorization.js');

router.use(authenticateUser)
router.get('/', TaskController.showAll);
router.get('/:id', TaskController.showById);
router.post('/', TaskController.create);
router.put('/:id', authorizeUser, TaskController.update);
router.delete('/:id', authorizeUser, TaskController.delete);

module.exports = router