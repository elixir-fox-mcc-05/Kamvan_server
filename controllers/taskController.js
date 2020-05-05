const { Task } = require("../models");

class TaskController {
  static findAll(req, res, next) {
    let UserId = req.currentUserId;
    Task.findAll({
      where: {
        UserId,
      },
    })
      .then((data) => {
        res.status(200).json({
          task: data,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static findOne(req, res, next) {
    let { id } = req.params;
    Task.findByPk(id)
      .then((data) => {
        if (!data) {
          throw {
            msg: `id with ${id} is not found`,
            code: 404,
          };
        } else {
          res.status(200).json({
            task: data,
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static create(req, res, next) {
    let { title, description, category } = req.body;
    let UserId = req.currentUserId;

    Task.create({
      title,
      description,
      category,
      UserId,
    })
      .then((data) => {
        res.status(201).json({
          task: data,
          msg: "success create task",
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static update(req, res, next) {
    let { id } = req.params;
    let updatedTask = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
    };

    Task.update(updatedTask, {
      where: { id },
      returning: true,
    })
      .then((result) => {
        res.status(201).json({
          msg: `task with id ${id} succesfully updated`,
          task: result[1][0],
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static delete(req, res, next) {
    let { id } = req.params;
    Task.destroy({
      where: { id },
    })
      .then((data) => {
        if (data) {
          res.status(200).json({
            msg: `task with id ${id} succesfully deleted`,
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = TaskController;
