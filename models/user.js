'use strict';
const {generatePassword} = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}

  User.init({
    email: {
      type : DataTypes.STRING,
      unique : true,
      validate : {
        notEmpty : true,
        isEmail : true
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true,
        len : [8, 25]
      }
    },
    organization: DataTypes.STRING
  }, {
    sequelize,
    hooks : {
      beforeCreate : (user) => {
        if(user.organization === '' || !user.organization){
          user.organization = "hacktiv8";
        }
        user.password = generatePassword(user.password);
      }
    },
    modelName : "User"
  });
  User.associate = function(models) {
    User.hasMany(models.Task);
  };
  return User;
};