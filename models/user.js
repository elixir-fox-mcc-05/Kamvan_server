'use strict';
const { generateHash } = require('../helpers/bcryptjs.js');
module.exports = (sequelize, DataTypes) => {
	const Model = sequelize.Sequelize.Model;

	class User extends Model {}

	User.init(
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Please insert your name'
					},
					len: {
						args: [ 2, 20 ],
						msg: 'Character minimum is 2, and maximum 20'
					}
				}
			},
			email: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Please insert your email'
					},
					isEmail: {
						args: true,
						msg: 'Please insert correct email format'
					}
				},
				unique: {
					args: true,
					msg: 'Email address already in use!'
				}
			},
			password: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Please insert your password'
					},
					len: {
						args: [ 3, 15 ],
						msg: 'Minimum password length is 3, maxiumum 15'
					}
				}
			},
			organization: DataTypes.STRING
		},
		{
			sequelize,
			hooks: {
				beforeCreate: (User) => {
					User.password = generateHash(User.password);
				}
			}
		}
	);

	User.associate = function(models) {
		User.hasMany(models.Task);
	};
	return User;
};
