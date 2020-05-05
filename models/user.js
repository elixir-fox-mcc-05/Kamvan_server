'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model{}
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [6,30]
      }
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};