'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Task extends Model{}

  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: DataTypes.STRING,
    point: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    assigned_to: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    UserId: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task'
  });
  Task.associate = function(models) {
    Task.belongsTo(models.User)
  };
  return Task;
};