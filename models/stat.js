'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Stat extends Model {}

  Stat.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING
  },{
    sequelize
  });
  Stat.associate = function(models) {
    // associations can be defined here
    Stat.hasMany(models.Task);
  };
  return Stat;
};