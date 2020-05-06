'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notNull: {
          args: true,
          msg: 'Title must be inputted'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 'backlog'
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task'
  })
  Task.associate = function(models) {
    Task.belongsTo(models.User, {foreignKey: 'UserId'})
  };
  return Task;
};