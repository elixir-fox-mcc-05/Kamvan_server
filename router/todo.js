const router = require('express').Router()
const TodoController = require('../controllers/todoController')


router.get('/',TodoController.list)
router.post('/add',TodoController.add)
router.delete('/delete/:id', TodoController.delete)
router.put('/update/:id', TodoController.update)

module.exports = router