'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class Kanban extends Model {}

  Kanban.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Title cannot be empty"
        },
        notNull: {
          args: true,
          msg: "Title cannot be null"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description cannot be empty"
        },
        notNull: {
          args: true,
          msg: "Description cannot be null"
        }
      }
    },
    tag: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (Kanban, options) => {
        Kanban.tag = 'backlog'
      }
    },
    sequelize
  });

  Kanban.associate = function(models) {
    Kanban.belongsTo(models.User, { foreignKey: "userId", targetKey: "id" });
  };
  return Kanban;
};