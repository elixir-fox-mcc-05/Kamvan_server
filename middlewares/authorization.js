const {Task} = require('../models');

function authorization (req, res, next) {
    let {id} = req.params

    Task.findByPk(id)
        .then(task => {
            if (task) {
                if (task.UserId == req.UserId) {
                    next()
                }
                else {
                    res.status(401).json({
                        msg : 'Unauthorized'
                    })
                }
            }
            else {
                res.status(404).json({
                    msg : 'Task not Found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            })
        })
}

module.exports = authorization;