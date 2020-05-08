const { Todo, UserProject } = require('../models');

module.exports = {
    authorizeUser: (req, res, next) => {
        const { id } = req.params;

        Todo
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
    },
    authorizeProjectMember: (req, res, next) => {
        const UserId = req.userId;
        const ProjectId = req.params.id ? req.params.id : req.params.project_id;

        UserProject
            .findOne({
                where: {
                    UserId,
                    ProjectId
                }
            })
            .then(result => {
                if(result) {
                    next();
                } else {
                    throw {
                        message: "Unauthorize user",
                        code: 401
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }
}