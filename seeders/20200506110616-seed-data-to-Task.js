'use strict';
const data = require("../db.json");
module.exports = {
  up: (queryInterface, Sequelize) => {
    data.map(element => {
      element.createdAt = new Date();
      element.updatedAt = new Date();
    });
    return queryInterface.bulkInsert("Tasks", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tasks", null, {});
  }
};
