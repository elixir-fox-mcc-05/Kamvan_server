let { Task, User } = require('../models/index')

function authorization (req, res, next) {
    console.log(req.params);
    Task.findByPk(req.params.id)
    .then(result => {
        if(result) {
            if(result.UserId == req.currentUserId) {
                next()
            } else {
                throw {
                    msg: 'unauthorized',
                    code: 401
                }
            }
        } else {
            throw {
                msg: 'not found',
                code: 404
            }
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = {authorization}