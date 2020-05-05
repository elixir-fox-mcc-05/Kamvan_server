'use strict'
const router = require(`express`).Router();

const todoRouter = require(`./todorouter.js`)
const userRouter = require(`./userrouter.js`)

router.get(`/`, (req, res) => {
    res.json({
        msg : `Ok`
    })
})

router.use(`/todos`, todoRouter)
router.use(`/users`, userRouter)

module.exports = router