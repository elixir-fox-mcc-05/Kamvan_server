'use strict';
const { generatePassword } = require('../helpers/bcryptjs.js');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {};

  User.init({
    email: {
      type: DataTypes.STRING, // unique true
      allowNull: false,
      unique: {
        args: true,
        msg: `E-mail already used`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `E-mail must be filled`
        },
        isEmail: {
          args: true,
          msg: `E-mail must be in format "youremail@mail.com"`
        }
      }
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password must be filled'
        }
      }
    },
    organization:{
      type: DataTypes.STRING,
      defaultValue: 'Hacktiv8'
    } 
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = generatePassword(user.password);
      }
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Task, {foreignKey: 'UserId'});
  };
  return User;
};