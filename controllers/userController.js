const Model = require('../models/index.js');
const User = Model.User;
const { checkPassword } = require('../helpers/bcryptjs.js');
const { generateToken } = require('../helpers/jsonwebtoken.js');
const googleVerification = require('../helpers/googleOauth.js');

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

	static googleSignIn(req, res, next) {
		let google_token = req.headers.google_token;
		let name = null;
		let email = null;
		let newUser = null;

		googleVerification(google_token)
			.then((dataPayload) => {
				name = dataPayload.given_name;
				email = dataPayload.email;

				let options = {
					where: { email }
				};
				return User.findOne(options);
			})
			.then((dataUser) => {
				if (dataUser) {
					return dataUser;
				} else {
					newUser = true;
					return User.create({
						name: name,
						email: email,
						password: process.env.DEFAULT_PASSWORD_GOOGLE_LOGIN
					});
				}
			})
			.then((user) => {
				let code = newUser ? 201 : 200;

				let access_token = generateToken({
					id: user.id,
					email: user.email,
					organization: user.organization
				});

				res.status(code).json({
					access_token
				});
			})
			.catch((err) => {
				next(err);
			});
	}
}

module.exports = UserController;
