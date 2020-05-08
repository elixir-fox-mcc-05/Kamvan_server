'use strict';
module.exports = (sequelize, DataTypes) => {

  class Task extends sequelize.Sequelize.Model{}
  
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [3, 30]
      }
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      }
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      }
    },
    deadline: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: true,
        isAfter: `${new Date()}`
      }
    },
    AssignorId: DataTypes.INTEGER,
    AssigneeId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate: (task) => {
        if(!task.priority || task.priority == '' || task.priority == ' ') {
          task.priority = 'Normal'
        }
        if(!task.category || task.category == '' || task.category == ' ') {
          task.category = 'Back-Log'
        }
      }
    }
  })
  
  Task.associate = function(models) {
    Task.belongsTo(models.User, {
      as: 'AssignorDetail',
      foreignKey: 'AssignorId'
    })
    Task.belongsTo(models.User, {
      as: 'AssigneeDetail',
      foreignKey: 'AssigneeId'
    })
  };
  return Task;
};