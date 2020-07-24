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
        },
        notEmpty: {
          args: true,
          msg: 'Title must be inputted'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'No description'
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 'backlog'
    },
    assignedTo: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    author: DataTypes.STRING,
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
    hooks: {
      beforeCreate(task, options){
        if(task.description == undefined || task.description == '' ) {
          task.description = 'No Description'
        }
      }
    }
  })

  Task.associate = function(models) {
    Task.belongsTo(models.User, {foreignKey: 'UserId'})
  };
  return Task;
};