'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.addColumn('Titles', 'StatusId', {
    type : Sequelize.INTEGER,
    references : {
      model : 'Statuses',
      key : 'id'
    },
    defaultValue : 1,
    onUpdate : 'cascade',
    onDelete : 'cascade'
  });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeColumn('Titles', 'StatusId');

  }
};
