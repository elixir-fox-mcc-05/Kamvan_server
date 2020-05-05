'use strict';
module.exports = (sequelize, DataTypes) => {
  class Usertask extends sequelize.Sequelize.Model{}


  Usertask.init({
    UserId: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  },{
    sequelize,
    modelName:"Usertask"    
  })
  
  
  Usertask.associate = function(models) {
    // associations can be defined here
    Usertask.belongsTo(models.User)
    Usertask.belongsTo(models.Task)
  };
  return Usertask;
};