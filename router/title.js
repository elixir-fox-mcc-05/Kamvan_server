const router = require('express').Router()
const TitleController = require('../controller/title.js')
const {authentication} = require('../middleware/authn.js')
const authorize = require('../middleware/authrz.js')

router.use(authentication)
router.get('/', TitleController.findAll)
router.post('/', TitleController.create)
router.delete('/:id', authorize,TitleController.delete)
router.put('/:id', authorize,TitleController.edit)


module.exports = router;