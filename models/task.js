'use strict';
module.exports = (sequelize, DataTypes) => {
	const Model = sequelize.Sequelize.Model;

	class Task extends Model {}

	Task.init(
		{
			title: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Please insert title'
					},
					len: {
						args: [ 2, 10 ],
						msg: 'Minimum title length is 2, maxiumum 10'
					}
				}
			},
			description: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Please insert description'
					},
					len: {
						args: [ 2, 20 ],
						msg: 'Minimum description length is 2, maxiumum 20'
					}
				}
			},
			category: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						args: true,
						msg: 'Please insert description'
					}
				}
			},
			UserId: {
				type: DataTypes.INTEGER
			}
		},
		{
			sequelize
		}
	);

	Task.associate = function(models) {
		Task.belongsTo(models.User);
	};
	return Task;
};
