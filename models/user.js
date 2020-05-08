'use strict';

const { generatePassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: `name is required`,
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'email already in use',
        },
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'email is required',
          },
          notEmpty: {
            args: true,
            msg: 'email is required',
          },
          isEmail: {
            args: true,
            msg: 'invalid email format',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'password is required',
          },
          notEmpty: {
            args: true,
            msg: 'password is required',
          },
          len: {
            args: 4,
            msg: 'password must be of more than 4 characters',
          },
        },
      },
      organization: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (user) => {
          user.password = generatePassword(user.password);
        },
      },
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Task, { foreignKey: 'UserId' });
  };
  return User;
};
