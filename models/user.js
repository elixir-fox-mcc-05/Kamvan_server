'use strict';
let {bcryptPass} = require('../helpers/bycrypt')
module.exports = (sequelize, DataTypes) => {
  let {Model} = sequelize.Sequelize
  class User extends Model {}
  
  User.init({
    email: {
      type : DataTypes.STRING
      },

    password: {
      type : DataTypes.STRING
    
      },
    organization: DataTypes.STRING
  }, {
    sequelize,
      hooks: {
        beforeCreate(user) {
          user.password = bcryptPass(user.password)
          user.organization = 'Hacktiv8'
        }
    }
  });
  
  User.associate = function(models) {
    User.hasMany(models.Task, { foreignKey: 'UserId' })
  };
  return User;
};