'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Task extends Model {}
  Task.init({
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
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
          if(!list.includes(this.status.toLowerCase())){
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
        task.category = this.category.toLowerCase();
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