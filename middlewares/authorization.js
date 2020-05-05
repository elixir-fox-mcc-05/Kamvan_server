const { task } = require('../models');

module.exports = {
    authorizeUser: (req, res, next) => {
        const { id } = req.params;

        task
            .findByPk(id)
            .then(task => {
                if(task) {
                    if(task.UserId === req.userId) {
                        next();
                    } else {
                        throw {
                            msg: 'user unauthorized',
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
    }
}