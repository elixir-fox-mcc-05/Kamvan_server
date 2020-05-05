'use strict'
const router = require(`express`).Router();

const UserController = require(`../controllers/usercontroller.js`);
const { authenticate, authorize } = require(`../middlewares/userauth`)

router.get(`/`, UserController.getUsers)

router.post(`/googleauth`, UserController.googleSign)
router.post(`/register`, UserController.create)
router.post(`/login`, UserController.login)
router.delete(`/:id`, UserController.deleteUser)


module.exports = router