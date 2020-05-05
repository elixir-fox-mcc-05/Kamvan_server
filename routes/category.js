const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController.js');

router.get('/', CategoryController.findAll);
router.get('/:id', CategoryController.findOne);

module.exports = router;