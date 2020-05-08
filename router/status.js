const router = require('express').Router()
const StatusController = require('../controller/status.js')


router.get('/', StatusController.findAll)


module.exports = router;