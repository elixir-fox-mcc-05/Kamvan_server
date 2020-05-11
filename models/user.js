'use strict';
const {Encrypt} = require("../helpers/bcrypt")
module.exports = (sequelize, DataTypes) => {
 class User extends sequelize.Sequelize.Model{}

 User.init({
  username:{
    type : DataTypes.STRING,
    allowNull:false,
    validate:{
      notEmpty:{
        args:false,
        msg:"Username is require"
      }
    }
  }, 
  email:{
    type : DataTypes.STRING,
    allowNull:false,
    validate:{
      isEmail:{
        args:false,
        msg:"Invalid Email format"
      },
      notEmpty:{
        args:false,
        msg:"Email is require"
      }
    }
  },
  password: {
    type : DataTypes.STRING,
    allowNull:false,
    validate:{
      notEmpty:{
        args:false,
        msg:"Password is require"
      }
    }
  }
 },{
   sequelize,
   modelName:"User",
   hooks:{
     beforeCreate:(user,option) =>{
      user.password = Encrypt(user.password)
     }
   }
 })
  
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Usertask)
    User.belongsToMany(models.Task,{ through: models.Usertask})
  };
  return User;
};