'use strict';
const { encrypt } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `First Name is required`
        },
        notEmpty: {
          msg: `First Name cannot be empty`
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Last Name is required`
        },
        notEmpty: {
          msg: `Last Name cannot be empty`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Email is required`
        },
        notEmpty: {
          msg: `Email cannot be empty`
        },
        isEmail: {
          msg: `Must be an email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Password required`
        },
        notEmpty: {
          args: true,
          msg: `Password cannot empty`
        },
        checkLength(value) {
          if(value.length < 6) {
            throw `Password at least 6 characters`
          }
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = encrypt(user.password);
        return new Promise((resolve, reject) => {
          User.findOne({
            where: {
              email: user.email
            }
          })
            .then(result => {
              if(result) {
                const err = `Email Already Exists`;
                reject(err);
              } else {
                resolve(user);
              }
            })
            .catch(err => {
              reject(err);
            });
        });
      }
    },
    sequelize
  })

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task);
  };
  return User;
};