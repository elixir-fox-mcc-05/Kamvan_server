const router = require("express").Router()
const controllerUser = require("../controllers/user")
const verifygmail = require('../helpers/googleVerify')

router.post("/register",controllerUser.register)
router.post("/login",controllerUser.login)
router.post("/gmail",verifygmail,controllerUser.loginGmail)

module.exports = router