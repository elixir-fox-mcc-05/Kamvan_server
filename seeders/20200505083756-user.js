'use strict';
const tasks = require('./tasks.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    tasks.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Tasks', tasks, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
