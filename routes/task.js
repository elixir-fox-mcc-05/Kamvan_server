const router = require("express").Router()
const controllertask = require("../controllers/task")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.post("/",authentication,controllertask.create)
router.post("/:userid/:id",authentication,authorization,controllertask.addmember)
router.put("/forward/:status/:id",authentication,authorization,controllertask.updateStatusForwared)
router.put("/backward/:status/:id",authentication,authorization,controllertask.updateStatusBackward)
router.delete("/:id",authentication,authorization,controllertask.delete)
router.get("/",authentication,controllertask.viewall)
router.get("/:id",authentication,controllertask.checkmember)
module.exports = router