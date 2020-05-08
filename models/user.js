'use strict';

const { hashPassword } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Your name can\'t be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already registered'
      },
      validate: {
        isEmail: {
          msg: 'Invalid email format'
        },
        notEmpty: {
          msg: 'Your email can\'t be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: 'password must be 8 character or longer'
        },
        notEmpty: {
          msg: 'Your password can\'t be empty'
        }
      }
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