'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model { }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    organization: {
      type: DataTypes.STRING,
      defaultValue: 'Hacktiv8'
    }
  }, 
  {
    sequelize,
    modelName: 'User'
  });
  User.associate = function(models) {
    User.hasMany(models.Task)
  };
  return User;
};