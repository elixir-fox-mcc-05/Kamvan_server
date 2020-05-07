'use strict';

const { generateHash } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class User extends Model{}

  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email has been already registered"
      },
      validate: {
        isEmail: {
          msg: "Incorrect email format"
        }
      }
    },
    password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8],
        msg: "Password must be 8 characters or longer"
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
        if (!user.name) user.name = user.email
        user.password = generateHash(user.password)
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Task)
  };
  return User;
};