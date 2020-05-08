const Model = require('../models/index.js');
const Task = Model.Task;

const authorization = (req, res, next) => {
	let id = req.params.id;

	Task.findByPk(id)
		.then((data) => {
			if (data) {
                if (data.UserId === req.signedInUserId) {
                    next()
                } else {
                    throw {
                        code : 401,
                        type : "UNAUTHORIZED",
                        message : "Sorry, not authorized, please use correct account"
                    }
                }
			} else {
                throw {
                    code : 404,
                    type : "NOT FOUND",
                    message : "Sorry, not found"
                }
			}
		})
		.catch((err) => {
			next(err);
		});
};

module.exports = authorization;
