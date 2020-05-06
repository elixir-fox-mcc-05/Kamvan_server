const Model = require('../models/index.js');
const User = Model.User;
const { checkPassword } = require('../helpers/bcryptjs.js');
const { generateToken } = require('../helpers/jsonwebtoken.js');

class UserController {
	static signup(req, res, next) {
		let values = {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		};

		User.create(values)
			.then((data) => {
				res.status(201).json({
					CreatedUser: data
				});
			})
			.catch((err) => {
				next(err);
			});
	}

	static signin(req, res, next) {
		let values = {
			email: req.body.email,
			password: req.body.password
		};

		let options = {
			where: {
				email: req.body.email
			}
		};

		User.findOne(options)
			.then((data) => {
				if (data) {
					let compare = checkPassword(values.password, data.password);
					if (compare) {
						let payload = {
							id: data.id,
							email: data.email,
							organization: data.organization
						};
						let access_token = generateToken(payload);
						res.status(200).json({ access_token });
					}
				} else {
					throw {
						code: 400,
						type: 'BAD REQUEST',
						message: 'Opps!, invalid email / password'
					};
				}
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = UserController;
