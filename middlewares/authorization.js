const { Task } = require('../models');

module.exports = {
    authorizeUser: (req, res, next) => {
        const { id } = req.params;

        Task
            .findByPk(id)
            .then(task => {
                if(task) {
                    if(task.UserId === req.userId) {
                        next();
                    } else {
                        throw {
                            msg: 'You do not have the authority to do this action',
                            code: 401
                        }
                    }
                } else {
                    throw {
                        msg: `No task with id ${id} found`,
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }
}