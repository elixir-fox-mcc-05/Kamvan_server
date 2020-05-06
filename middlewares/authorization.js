const { Task } = require('../models')

function authorization(req, res, next) {
    Task.findByPk(req.params.taskId)
        .then(task => {
            if (task) {
                if (task.UserId == req.UserId) {
                    next()
                }
            }
        })
        .catch(err => {
            // task not found or server error
            next(err)
        })
}

module.exports = authorization