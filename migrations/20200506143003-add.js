'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tasks', 'category', {
      type: Sequelize.STRING,
      defaultValue: 'Back-Log'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tasks', 'category')
  }
};
