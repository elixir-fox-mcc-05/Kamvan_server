'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Todos', 'UserId', {
      type : Sequelize.INTEGER,
      foreignKey : true,
      references : {
        model : "Users",
        key : 'id'
      },
      onUpdate : 'cascade',
      onDelete : 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Todos','UserId')
  }
};
