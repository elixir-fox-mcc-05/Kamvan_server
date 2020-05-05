'use strict';
module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.Sequelize.Model
  let { hashPass } = require('../helpers/bcryptjs.js')

  class User extends Model {}

    User.init({
      email: {
        allowNull : {
          args : false,
          msg : 'email cannot be empty'
        },
        type : DataTypes.STRING,
        unique : {
          args : true,
          msg : 'email has already exists' 
        },
        validate : {
          isEmail : {
            args : true,
            msg : 'invalid email format'
          }
        }
      },
      password:  {
        allowNull : {
          args : false,
          msg : 'password cannot be empty'
        },
        type : DataTypes.STRING,
        validate : {
          len : {
            args : [8,30],
            msg : 'password length must morethan 8 and lessthan 30'
          }
        }
      }
    } , {
      sequelize,
      hooks : {
        beforeCreate(user) {
          user.password = hashPass(user.password)
        }
      }
    })
  
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};