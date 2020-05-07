const router = require('express').Router();
const user = require('./user');
const task = require('./task');

// router.get('/', (req, res) => res.json({ artist: "Stephanie Poetri", song: `I love you at port ${process.env.PORT}`}))
router.use('/', user);
router.use('/', task);

module.exports = router;