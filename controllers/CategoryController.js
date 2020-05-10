const { Category, Task } = require('../models');

class CategoryController {
  static findAll(req, res, next) {
    Category.findAll({
      include: {
        model: Task
      }
    })
      .then(result => {
        res.status(200).json({
          Categories: result
        });
      })
      .catch(err => {
        return next(err);
      });
  }
  static findOne(req, res, next) {
    let id = req.params.id;
    Category.findByPk(id, {
      include: {
        model: Task
      }
    })
      .then(result => {
        res.status(200).json({
          Category: result
        });
      })
      .catch(err => {
        return next(err);
      });
  }
}

module.exports = CategoryController;