'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'organization', {
      type: Sequelize.STRING,
      defaultValue: 'Hacktiv8',
      allowNull :false,
      validate: {
        notNull : true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'organization', {});
  }
};
