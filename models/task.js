'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class Task extends Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "No description"
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
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