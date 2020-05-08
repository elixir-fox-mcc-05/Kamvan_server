'use strict';
const {generatePassword} = require('../helpers/bcrypt')

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
    },
    organization: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = generatePassword(user.password)
      }
    },
    sequelize,
    modelName: 'User'
  });
  User.associate = function(models) {
    User.hasMany(models.Task)
  };
  return User;
};