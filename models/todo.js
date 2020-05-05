'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class Todo extends Model {}

  Todo.init({
    title: {
      type : DataTypes.STRING
    },
    description: DataTypes.STRING,
    status: {
      type : DataTypes.STRING,
      defaultValue : `backlog`
    },
    point: {
      type : DataTypes.INTEGER
    },
    UserId : DataTypes.INTEGER,
    assignedTo : DataTypes.STRING
  },
  {
    sequelize,
    modelName : `Todo`,
    hooks : {
      beforeValidate : (data, options) => {
        if(!data.title || !data.description || !data.assignedTo || !data.point){
          return Promise.reject(new Error("One or more of the field(s) is/are empty"));
        }
      }
    }
  })

  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
  };
  return Todo;
};