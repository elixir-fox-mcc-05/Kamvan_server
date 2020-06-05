'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Task extends Model {}
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'Title can\'t be empty'}
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: 'Description can\'t be empty'}
      }
    },
    point: {
      type: DataTypes.INTEGER
    },
    assignedto: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.ENUM('backlog', 'todo', 'doing','done'),
      validate: {
        checkCategory() {
          const list = ['backlog', 'todo', 'doing', 'done'];
          if(!list.includes(this.category)){
            throw new Error('Category must be : backlog, todo, doing, done')
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
    hooks: {
      beforeCreate(task) {
        task.category = 'backlog';
      }
    },
    sequelize
  })
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User);
  };
  return Task;
};