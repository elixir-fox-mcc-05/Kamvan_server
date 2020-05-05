'use strict';

const { hashPassword } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    organization: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Hacktiv8"
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password);
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Task);
  };
  return User;
};