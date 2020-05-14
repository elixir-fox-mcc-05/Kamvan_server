const { Task } = require('../models')

module.exports = (req, res, next) => {
    const { id } = req.params;

    Task.findByPk(id)
        .then(result => {
            if (result) {
                if (result.UserId === req.currentUserId) next()
                else {
                    res.status(401).json({
                        msg: "User is unauthorized to modify this Task",
                        loc: "@authorization"
                    })
                }
            } else {
                res.status(404).json({
                    msg: `Task with id ${id} is not available`,
                    loc: "@authorization"
                })
            }
        })
}