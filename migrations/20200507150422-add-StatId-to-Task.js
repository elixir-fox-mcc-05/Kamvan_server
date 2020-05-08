'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Tasks', 'StatId', {
    type : Sequelize.INTEGER,
    references : {
      model : 'Stats',
      key : 'id'
    },
    onUpdate : 'cascade',
    onDelete : 'cascade'
  });

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Tasks', 'StatId');
  }
};