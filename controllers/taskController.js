const Model = require('../models/index.js');
const Task = Model.Task;
const User = Model.User;

class TaskController {
	static findAll(req, res, next) {
		let signedInUserOrganization = req.signedInUserOrganization;

		let options = {
			include: [
				{
					model: User,
					where: {
						organization: signedInUserOrganization
					},
					attributes: {
						exclude: [ 'password', 'createdAt', 'updatedAt' ]
					}
				}
			]
		};

		Task.findAll(options)
			.then((data) => {
				res.status(200).json({
					Tasks: data
				});
			})
			.catch((err) => {
				next(err);
			});
	}

	static create(req, res, next) {
		let values = {
			title: req.body.title,
			description: req.body.description,
			UserId: req.signedInUserId
		};

		Task.create(values)
			.then((data) => {
				res.status(201).json({
					CreatedTask: data
				});
			})
			.catch((err) => {
				next(err);
			});
	}

	static update(req, res, next) {
		let values = {
			title: req.body.title,
			description: req.body.description,
			category: req.body.category
		};

		let options = {
			where: {
				id: req.params.id
			},
			returning: true
		};

		Task.update(values, options)
			.then((data) => {
				res.status(200).json({
					UpdatedTask: data[1][0]
				});
			})
			.catch((err) => {
				next(err);
			});
	}

	static destroy(req, res, next) {
		let options = {
			where: {
				id: req.params.id
			}
		};

		let choosed = null;

		Task.findOne(options)
			.then((data) => {
				choosed = data;
				Task.destroy(options);
			})
			.then((_) => {
				res.status(200).json({
					DeletedTask: choosed
				});
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = TaskController;
