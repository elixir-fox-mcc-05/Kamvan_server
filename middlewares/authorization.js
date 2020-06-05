const { Task } = require('../models');

const authorization = (req, res, next) => {
  let { id } = req.params;
  if (!title && !description && !points && !assigned_to) {
    next();
  }

  if (req.body )
  Task.findByPk(id)
    .then(result => {
      if(result) {
        if(result.UserId == req.UserId) {
          next();
        } else {
          return next({
            code: 401,
            name: "Unauthorized Error",
            msg: `You cannot access this service`
          });
        }
      } else {
        return next({
          code: 404,
          name: "NotfoundError",
          msg: `Data Not Found`
        });
      }
    })
    .catch(err => {
      return next(err);
    })
}

module.exports = authorization;