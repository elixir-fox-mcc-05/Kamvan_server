'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'custom_unique_email'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Users', 'custom_unique_email')
  }
};
