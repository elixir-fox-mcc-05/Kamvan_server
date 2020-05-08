'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('Tasks', 'UserId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'Users',
				key: 'id'
			},
			onUnpdate: 'cascade',
			onDelete: 'cascade'
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('Tasks', 'UserId');
	}
};
