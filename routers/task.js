let router = require('express').Router()
let TaskController = require('../controllers/task')
let {authentification} = require('../middlewares/authentification')
let {authorization} = require('../middlewares/authorization')

router.get('/', TaskController.show)
router.use(authentification)
router.post('/', TaskController.create)
router.use(authorization)
router.patch('/:id', TaskController.step)
router.delete('/:id', TaskController.delete)

module.exports = router