const { Task } = require('../models');

module.exports = {
    authorizeUser: (req, res, next) => {
        const { id } = req.params;

        Task
            .findByPk(id)
            .then(result => {
                if(result) {
                    if(result.UserId === req.userId) {
                        next();
                    } else {
                        throw {
                            message: "Unauthorized User",
                            code: 401
                        }
                    }
                } else {
                    throw {
                        message: `Data Not Found`,
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }
}