'use strict';
module.exports = (sequelize, DataTypes) => {

  class Task extends sequelize.Sequelize.Model { }

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  }, 
  {
    sequelize,
    modelName: 'Task'
  });
  Task.associate = function(models) {
    Task.belongsTo(models.User)
  };
  return Task;
};