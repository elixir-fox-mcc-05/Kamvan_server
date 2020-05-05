'use strict';
module.exports = (sequelize, DataTypes) => {

  class Task extends sequelize.Sequelize.Model {}

  Task.init({
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate:{
        notNull: {
          arg: false,
          msg: 'Please specify a task title'
        },
        notEmpty:{
          arg: true,
          msg: 'Please specify a task title'
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate:{
        notNull: {
          arg: false,
          msg: 'Please specify a task category'
        },
        notEmpty:{
          arg: true,
          msg: 'Please specify a task category'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate:{
        notNull: {
          arg: false,
          msg: 'Please specify a task description'
        },
        notEmpty:{
          arg: true,
          msg: 'Please specify a task description'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notNull: {
          arg: false,
          msg: 'Please specify a due date'
        },
        notEmpty:{
          arg: true,
          msg: 'Please specify a due date'
        }
      }
    },
    UserId:{
      type: DataTypes.INTEGER
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Task' // We need to choose the model name
  });




  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};