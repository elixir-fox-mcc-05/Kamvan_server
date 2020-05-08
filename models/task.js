'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}
  Task.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    descriptions: {
      type : DataTypes.STRING
    },
    point: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : true
      }
    },
    assigned: {
      type : DataTypes.STRING,
      valide : {
        notEmpty : true
      }
    },
    category: DataTypes.STRING,
    UserId: {
      type : DataTypes.INTEGER,
      references : {
        model : "Users",
        key : "id"
      },
      onDelete : "cascade",
      onUpdate : "cascade"
    }
  }, {
    sequelize,
    hooks : {
      beforeCreate : (task) => {
        task.category = "backlogs";
      }
    },
    modelName : "Task"
  });
  Task.associate = function(models) {
    Task.belongsTo(models.User);
  };
  return Task;
};