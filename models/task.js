'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;

  class Task extends Model{}
  
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Title is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Description is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          args: true,
          msg: "Status is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        },
        isIn: {
          args: [['Back-Log', 'To-Do', 'Doing', 'Done']],
          msg: "This field is status arguments only (Back-Log, To-Do, Doing, Done)"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "UserId is required"
        },
        notEmpty: {
          args: true,
          msg: "This field cannot be empty"
        }
      }
    }
  },
  {
    sequelize, modelName: "Task"
  });
  
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User);
  };
  return Task;
};