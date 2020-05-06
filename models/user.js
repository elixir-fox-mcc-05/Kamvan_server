'use strict';
const { encryptPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Input valid email'
        },
        notNull: {
          args: true,
          msg: 'Email must be inputted'
        }
      }
    } ,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3,10],
          msg: 'Password must be 3-10 characters'
        },
        notNull: {
          args: true,
          msg: 'Password must be inputted'
        }
      }
    } ,
    organization: {
      type: DataTypes.STRING,
      defaultValue: 'Hacktiv8' 
    } 
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, options){
        this.password = encryptPassword(this.password)
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Task)
  };
  return User;
};