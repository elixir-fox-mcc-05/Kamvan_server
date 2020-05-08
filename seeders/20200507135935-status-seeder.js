'use strict'

const data = require('../data/status.json').map(elem => {
  elem.createdAt = new Date();
  elem.updatedAt = new Date();
  return elem;
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stats", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stats", null, {});
  }
};