'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Task extends Model { }

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Title Cannot Null' },
        notEmpty: { args: true, msg: 'Title Cannot Empty' }
      }
    },
    description: DataTypes.STRING,
    point: DataTypes.INTEGER,
    assignedto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Assigned Cannot Null' },
        notEmpty: { args: true, msg: 'Assigned Cannot Empty' }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Category Cannot Null' },
        notEmpty: { args: true, msg: 'Category Cannot Empty' }
      }
    },
    UserId: DataTypes.INTEGER,
    organization: DataTypes.STRING
  }, { sequelize })

  Task.associate = function (models) {
    // associations can be defined here
    Task.belongsTo(models.User)
  };
  return Task;
};