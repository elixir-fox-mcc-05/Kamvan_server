"use strict"

const express = require("express");
const router = express.Router();
const ControllerTask = require("../controllers/controllertask.js");
const authentication = require("../middlewares/authentication.js");
const authorization = require("../middlewares/authorization.js");

router.use(authentication);
router.get('/', ControllerTask.showTask);
router.post('/', ControllerTask.addTask);
router.get('/:id', ControllerTask.findTask);
router.delete('/:id', authorization, ControllerTask.deleteTask);
router.put("/:id", authorization, ControllerTask.updateTask);

module.exports = router;