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
    point: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    assignedTo: {
      type: DataTypes.STRING,
    },
    StatId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: "Stat",
        key: "id"
      },
      onUpdate: "Cascade",
      onDelete: "Cascade"
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
    Task.belongsTo(models.Stat)
  };
  return Task;
};