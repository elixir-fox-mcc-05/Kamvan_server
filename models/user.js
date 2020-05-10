'use strict';
const Helper = require('../helper/helper')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model { }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Name Cannot be Blank' },
        notEmpty: { args: true, msg: 'Name Cannot be Empty' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { args: true, msg: 'Must in Email Format' },
        notNull: { args: true, msg: 'Email Cannot be Blank' },
        notEmpty: { args: true, msg: 'Email Cannot Empty' }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Password Cannot be Blank' },
        notEmpty: { args: true, msg: 'Password Cannot Empty' }
      }
    },
    organization: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = Helper.hashPassword(user.password)
      }
    },
    sequelize
  })

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};