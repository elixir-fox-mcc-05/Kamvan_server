'use strict';
module.exports = (sequelize, DataTypes) => {

  const { plainToHash } = require(`../helpers/bcrypt`)
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          msg : `re-check your email formatting`
        }
      },
      unique : {
        msg : `Email has already been registered`
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [4,8],
          msg : `password must be between 4 to 8 characters`
        }
      }
    },
    organization : {
      type : DataTypes.STRING,
      defaultValue: `Hacktiv8`
    }
  },
  {
    sequelize,
    modelName : `User`,
    hooks : {
      beforeValidate : (data, options) => {
        if(!data.email || !data.password){
          return Promise.reject(new Error("One or more of the field(s) is/are empty"));
        }
      },
      afterValidate : (user, options) => {
        user.password = plainToHash(user.password)
      }
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Todo)
  };
  return User;
};