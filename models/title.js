'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Title extends Model {}

  Title.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    point: DataTypes.INTEGER,
    assignedto: DataTypes.STRING,
    UserId: {
      type : DataTypes.INTEGER,
      refrences : {
        model : 'Users',
        key : 'id'
      }
    }
  },{
    sequelize
  })
  Title.associate = function(models) {
    // associations can be defined here
    Title.belongsTo(models.User)
  };
  return Title;
};