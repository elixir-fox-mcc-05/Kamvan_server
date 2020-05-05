'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class Kanban extends Model {}

  Kanban.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
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
    Kanban.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Kanban;
};