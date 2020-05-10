'use strict';
module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.Sequelize.Model

  class Task extends Model {}

  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    point: DataTypes.INTEGER,
    assign_to: DataTypes.STRING,
    status: {
      type: DataTypes.STRING
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    user_org: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    hooks : {
      beforeCreate(task) {
        task.status = 'back-log'
        if(!task.title) {
          task.title = 'Untitle'
        }
      }
    }
  })
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};