'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {name : "Backlogs", createdAt : new Date(), updatedAt : new Date()},
      {name : "Todos", createdAt : new Date(), updatedAt : new Date()},
      {name : "Doings", createdAt : new Date(), updatedAt : new Date()},
      {name : "Dones", createdAt : new Date(), updatedAt : new Date()}
    ];
    return queryInterface.bulkInsert("Categories", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkRemove("Categories", null, {});
  }
};
