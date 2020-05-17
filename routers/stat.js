const router = require('express').Router();
const StatController = require('../controllers/statController.js');

router.get('/', StatController.findAll);
router.get('/:id', StatController.findOne);

module.exports = router;