'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tasks', 'organization', {
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tasks', 'organization');
  }
};