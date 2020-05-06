'use strict';

module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model{}

  Task.init({
    title: {type : DataTypes.STRING, allowNull : false},
    points: {type : DataTypes.INTEGER, allowNull : false},
    category : {type : DataTypes.STRING, allowNull : false},
    description: {type : DataTypes.STRING, allowNull : false},
    done : {type : DataTypes.BOOLEAN},
    organization : {type : DataTypes.STRING},
    UserId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName : 'Task',
    hooks : {
      beforeCreate : (task) => {
        let models = sequelize.models
        task.done = false
        let checkcategory = ['backlog', 'todo', 'doing', 'done']
        let check = false
        for (let temp of checkcategory){
          if (task.category == temp){
            check = true
          }
        }
        if (!check){
          throw new Error (`category must "backlog", "todo" , "doing" and "done"`)
        }
      },
      beforeUpdate : (task) => {
        let models = sequelize.models
        let checkcategory = ['backlog', 'todo', 'doing', 'done']
        let check = false
        for (let temp of checkcategory){
          if (task.category == temp){
            check = true
          }
        }
        if(task.category == "Done" && task.done == false){
          return models.User.findByPk(task.id)
                      .then(data => {
                          let points = data.points + task.points
                          task.done = true
                          return User.update(points, {where: {id : data.id}})
                      })
                      .then(data => {
                          console.log('success : added points')
                      })
        }
        // if (task._PreviousDataValues.category == 'Done'){
        //   throw new Error(`once done, is done, always consistent`)
        // }
      }
    }
  });
  Task.associate = function(models) {
    Task.belongsTo(models.User)
    // associations can be defined here
  };
  return Task;
};