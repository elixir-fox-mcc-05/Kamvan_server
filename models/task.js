"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Task extends Model {}

  Task.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "title is required",
          },
          notEmpty: {
            args: true,
            msg: "title is required",
          },
          len: {
            args: 4,
            msg: "title must be of more than 4 characters",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "description is required",
          },
          notEmpty: {
            args: true,
            msg: "description is required",
          },
          len: {
            args: 4,
            msg: "description must be of more than 4 characters",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "category is required",
          },
          notEmpty: {
            args: true,
            msg: "category is required",
          },
          len: {
            args: 4,
            msg: "category must be of more than 4 characters",
          },
        },
      },
    },
    {
      sequelize,
    }
  );

  Task.associate = function (models) {
    Task.belongsTo(models.User, { foreignKey: "UserId" });
  };
  return Task;
};
