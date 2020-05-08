const express = require("express");
const router = express.Router();

const taskRoutes = require("./task.js");
router.use("/tasks", taskRoutes);

const userRoutes = require("./user.js");
router.use("/users", userRoutes);

module.exports = router;