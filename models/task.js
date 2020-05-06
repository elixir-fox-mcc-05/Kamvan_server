'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Task extends Model {};

  Task.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title must be filled'
        }
      }
    },
    description: DataTypes.TEXT, // kosong = undefined
    category: {
      type: DataTypes.STRING,
      defaultValue: 'Back Log'
    },
    UserId: DataTypes.INTEGER,
    UserEmail: DataTypes.STRING,
    UserOrganization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task'
  })

  Task.associate = function(models) {
    Task.belongsTo(models.User, {foreignKey: 'UserId'});
  };
  return Task;
};