'use strict';
// const { encrypt } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {

    get fullName() {
      return `${this.first_name} ${this.last_name}`
    }

  }

  User.init({
    first_name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3],
          msg: 'first name must more than 3 letters'
        },
        notEmpty: {
          args: true,
          msg: 'first name must not empty'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: `email must with @ and "." `
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3], msg: 'password must more than 3 letters'
        },
        notEmpty: {
          args: true,
          msg: 'password must not empty'
        }
      }
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        console.log(user._previousDataValues)
        if (user.last_name == '') {
          user.last_name == user.first_name
        }
        // user.password = encrypt(user.password)
        if (user.organization == null) {
          user.organization = 'hacktiv8'
        }
      },
      beforeUpdate: (user) => {
        if (user.last_name == '') {
          user.last_name = user.first_name
        }
        // user.password = encrypt(user.password)
        if (user.organization != user._previousDataValues.organization) {
          throw err
        }
      }
    }
  });
  User.associate = function (models) {
    User.hasMany(models.Task)
    // associations can be defined here
  };
  return User;
};