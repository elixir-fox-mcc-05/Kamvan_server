'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
        isEmail: true,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: false
      },
      organization: {
        type: Sequelize.STRING,
        defaultValue: "Hacktiv8"
      },
      role: {
        type: Sequelize.STRING,
        defaultValue: "User"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};