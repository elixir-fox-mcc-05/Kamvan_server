const { User, Task } = require('../models');

class TaskController {
  static findAll(req, res, next) {
    let UserId = req.UserId;
    Task.findAll({
      where: {
        UserId
      },
      include: {
        model: User,
        attributes: ["id", "email"]
      }
    })
      .then(data => {
        res.status(200).json({
          Task: data
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static createTask(req, res, next) {
    let { title, description, points, categoryId } = req.body;
    let UserId = req.UserId;
    Task.create({
      title,
      description,
      points,
      categoryId,
      UserId
    })
      .then(data => {
        res.status(201).json({
          Task: data
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static updateTask(req, res, next) {
    let { title, description, points, categoryId } = req.body;
    let id = req.params.id;
    Task.update({
      title,
      description,
      points,
      CategoryId: categoryId
    }, {
      where: {
        id
      },
      returning: true
    })
      .then(result => {
        res.status(200).json({
          Task: result
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static deleteTask(req, res, next) {
    let id = req.params.id;
    let deletedData;
    Task.findByPk(id)
      .then(data => {
        if(data) {
          deletedData = data;
          return Task.destroy({
            where: {
              id
            }
          })
        } else {
          return next({
            code: 404,
            message: `Task Not Found`
          })
        }
      })
      .then(result => {
        res.status(200).json({
          deletedData
        });
      })
      .catch(err => {
        return next(err);
      })
  }
}

module.exports = TaskController;