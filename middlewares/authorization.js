const { Kanban } = require('../models');

function authorization(req, res, next) {
   let id = req.params.kanbanid;
    Kanban.findByPk(id)
        .then(kanban => {
            if (kanban) {
                if (kanban.UserId === req.currentUserId) {
                    next()
                } else {
                    next({
                        name: 'Unauthorized',
                        errors: [{ message: `User tidak memilik hak akses`}]
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