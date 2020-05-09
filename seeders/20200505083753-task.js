'use strict';
const users = require("./user.json")

module.exports = {
  up: (queryInterface, Sequelize) => {
    users.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
