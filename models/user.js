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