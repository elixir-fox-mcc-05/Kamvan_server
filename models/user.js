'use strict';

const {encrypt} = require('../helpers/bcrypt.js')

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model{}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: {
        args: true,
        msg: "Username already taken"
      },
      validate: {
        notEmpty: {
          msg: "Username must be filled"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Email required`
        },
        isEmail: {
          args: true,
          msg: `Must be an email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [6, 25]
      }
    }
  },  {
    hooks: {
      beforeCreate(user) {
        user.password = encrypt(user.password);
      }
    },  sequelize, modelName: "User"});

  User.associate = function(models) {
    User.hasMany(models.Task);
  };
  
  return User;
};