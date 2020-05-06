const { Todo } = require('../models');

function authorization(req, res, next) {
    let { id } = req.params
    Todo.findByPk(id)
        .then(todo => {
            if (todo) {
                if (todo.UserId === req.currentUserId) {
                    next()
                } else {
                    next({
                        name: 'Unauthorized',
                        errors: [{ message: `User tidak memilik hak akses untuk edit/delete`}]
                    })
                }
            } else {
                next({
                    name: 'Not Found',
                    errors: [{ message: `tidak ditemukan`}]
                })
            }
        })
        .catch(err => {
            next({
                name: 'Internal Server Error',
                errors: [{ message: err }]
            })
        })
}

module.exports = authorization;