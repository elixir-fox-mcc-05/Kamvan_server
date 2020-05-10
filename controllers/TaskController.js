const { User, Task } = require('../models');

class TaskController {
  static findAll(req, res, next) {
    let UserId = req.UserId;
    Task.findAll({
      include: {
        model: User,
        attributes: ['id', 'email']
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
    let { title, description, points, categoryId, assigned_to } = req.body;
    let UserId = req.UserId;
    Task.create({
      title,
      description,
      points,
      categoryId,
      UserId,
      assigned_to
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
    let { title, description, points, categoryId, assigned_to } = req.body;
    let value;
    if (!title && !description && !points && !assigned_to) {
      value = {
        CategoryId: categoryId
      };
    } else {
      value = {
        title,
        description,
        points,
        assigned_to,
        CategoryId: categoryId
      };
    }
    let id = req.params.id;
    Task.update(value, {
      where: {
        id
      },
      returning: true
    })
      .then(result => {
        console.log(result);
        if (result[0] > 0) {
          res.status(200).json({
            Task: result[1][0]
          });
        } else {
          return next({
            code: 404,
            name: '404NotFoundError',
            msg: `Data Not Found`
          });
        }
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
        if (data) {
          deletedData = data;
          return Task.destroy({
            where: {
              id
            }
          });
        } else {
          return next({
            code: 404,
            message: `Task Not Found`
          });
        }
      })
      .then(result => {
        res.status(200).json({
          deletedData
        });
      })
      .catch(err => {
        return next(err);
      });
  }
}

module.exports = TaskController;
