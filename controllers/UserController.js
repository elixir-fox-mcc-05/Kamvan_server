const { User } = require('../models');
const { compare } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');

class UserController {
  static login(req, res, next) {
    let { email, password } = req.body;
    User.findOne({
      where: {
        email
      }
    })
      .then(result => {
        if(result) {
          if(compare(password, result.password)) {
            let token = generateToken({
              id: result.id,
              email: result.email
            });
            res.status(200).json({
              token
            });
          } else {
            return next({
              code: 401,
              message: "Password does not match"
            });
          }
        }
      })
      .catch(err => {
        return next(err);
      });
  }
  static register(req, res, next) {
    let { first_name, last_name, email, password } = req.body;
    User.create({
      first_name,
      last_name,
      email,
      password
    })
      .then(data => {
        res.status(201).json({
          User: data
        });
      })
      .catch(err => {
        return next(err);
      });
  }
}

module.exports = UserController;