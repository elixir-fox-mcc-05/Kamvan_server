'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class Task extends Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Task title can\'t be empty'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "No description"
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'backlog',
      validate: {
        notEmpty: {
          msg: 'Task category can\'t be empty'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate:{
        notEmpty: {
          msg: 'Task due_date can\'t be empty'
        },
        isDate: {
          msg: 'Wrong date format'
        },
        isFuture(task) {
          let today = new Date();
          if(task.due_date < today) {
            throw ('Its either today or future data for due_date')
          }
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'Task'
  });
  Task.associate = function(models) {
    Task.belongsTo(models.User);
  };
  return Task;
};