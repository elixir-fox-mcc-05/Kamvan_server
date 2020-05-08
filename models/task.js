'use strict';
module.exports = (sequelize, DataTypes) => {
  let {Model} = sequelize.Sequelize
  class Task extends Model {}
  
  Task.init({
    point: DataTypes.INTEGER,
    title: DataTypes.STRING,
    assign: DataTypes.STRING,
    status: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
    
  }, {
    sequelize,
  });

  Task.associate = function(models) {
    Task.belongsTo(models.User, { foreignKey: 'UserId' })
  };
  return Task;
};