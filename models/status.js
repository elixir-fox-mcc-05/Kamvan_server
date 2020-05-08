'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Status extends Model {}

  Status.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    btnColor : DataTypes.STRING
  },{
    sequelize
  })

  Status.associate = function(models) {
    // associations can be defined here
    Status.hasMany(models.Title)
  };
  return Status;
};