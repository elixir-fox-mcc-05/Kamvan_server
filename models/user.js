'use strict';
module.exports = (sequelize, DataTypes) => {

  const { encrypt } = require('../helpers/bycrypt');
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: `Name sudah terdapat di server, silahkan menggunakan nama lain`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `Name tidak boleh kosong`
        }
      }
    },
    email: {
      type:  DataTypes.STRING,
      unique: {
        args: true,
        msg: `Email sudah terdapat di server. Silahkan menggunakan email lain`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `Email tidak boleh kosong`
        }, 
        isEmail: {
          args: true,
          msg: `Email harus dalam format email`
        }
      }
    },
    organization: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Password tidak boleh kosong`
        },
        len: {
          args: [6],
          msg: 'Password minimal 6 karakter'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = encrypt(user.password);
      }
    },
    modelName: 'User'
  });

  User.associate = function(models) {
    User.hasMany(models.Kanban, { foreignKey: 'UserId', targetKey: 'id' });
  };
  return User;
};