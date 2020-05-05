'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Task extends Model {}

  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Title is required`
        },
        notEmpty: {
          msg: `Title can't be empty`
        }
      }
    },
    description: {
      type: DataTypes.STRING,
    },
    assignedTo: {
      type: DataTypes.STRING,
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id"
      },
      onUpdate: "Cascade",
      onDelete: "Cascade"
    }
  }, {
    sequelize
  })

  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User);
  };
  return Task;
};