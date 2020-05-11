'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Tasks", "CategoryId", {
          type: Sequelize.INTEGER,
          references : {
            model : "Categories",
            key : "id"
          },
          onDelete : "cascade",
          onUpdate : "cascade"
        })
      .then(result => {
          return queryInterface
              .addColumn("Tasks", "UserId", {
                type: Sequelize.INTEGER,
                references : {
                  model : "Users",
                  key : "id"
                },
                onDelete : "cascade",
                onUpdate : "cascade"
              });
      });
  },

  down: (queryInterface, Sequelize) => {
      return  queryInterface
          .removeColumn("Tasks", "CategoryId")
          .then(result => {
            return queryInterface.removeColumn("Tasks", "UserId");
          });
  }
};
