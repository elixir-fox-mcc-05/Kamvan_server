const express = require("express");
const router = express.Router();

router.get('/', function (req, res) { res.status(200).json({ msg: 'app is running'})});

const taskRoutes = require("./task.js");
router.use("/tasks", taskRoutes);

const userRoutes = require("./user.js");
router.use("/users", userRoutes);

module.exports = router;