const { Task, User } = require('../models')

function authorization(req, res, next) {
    Task.findOne({ where: { id: req.params.taskId }, include: [ User ] })
    .then(task => {
        if (task) {
            if (task.UserId == req.UserId) {
                    next()
            } else {
                User.findByPk(req.UserId)
                    .then(user => {
                        if (user.organization == task.User.organization) {
                            next()
                        }
                    })
                    .catch (err => {
                        next(err)
                    })
            }
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = authorization