const { Stat, Task } = require('../models');

class StatController {
  static findAll(req, res, next) {
    Stat.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Task
      }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      });
  }
  
  static findOne(req, res, next) {
    let id = req.params.id;
    Stat.findByPk(id, {
      include: {
        model: Task
      }
    })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = StatController;