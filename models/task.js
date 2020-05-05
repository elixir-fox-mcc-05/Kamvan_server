'use strict';
module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.Sequelize.Model

  class Task extends Model {}

  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    point: DataTypes.INTEGER,
    assign_to: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    hooks : {
      beforeCreate(task) {
        task.status = 'back-log'
      }
    }
  })
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};