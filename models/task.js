'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Task extends Model{}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Title cannot be empty"}
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Todo"
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "No description"
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: "Incorrect date format"},
        isPast(task) {
          let today = new Date()
          if (task.due_date < today ) {
            throw ("Due date cannot be set in the past")
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
    modelName: "Task",
    hooks: {
      beforeCreate(task) {
        if (!task.description) task.description = "No description"
      }
    }
  });
  Task.associate = function(models) {
    Task.belongsTo(models.User)
  };
  return Task;
};
