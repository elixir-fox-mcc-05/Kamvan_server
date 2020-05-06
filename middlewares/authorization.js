const { Task } = require('../models')

function authorization(req, res, next){
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(result => {
        if(result) {
            if(result.UserId == req.currentUserId){
                return next()
            }
            else {
                return next({
                    name : 'Unauthorized',
                    errors: [{message: "User not authorized"}]
                })
            }
        }
        else {
            return next({
                name : 'Not Found',
                errors: [{message: "Task not found"}]
            })
        }
    })
    .catch(err => {
        return next({
            name : 'Internal Server Error',
            errors: [{message: err}]
        })
    })
}

module.exports = authorization