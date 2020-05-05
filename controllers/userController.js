const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static register(req, res, next) {
    let { email, password } = req.body;
    User.create({
      email,
      password,
    })
      .then((data) => {
        res.status(201).json({
          id: data.id,
          email: data.email,
          password: data.password,
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  static login(req, res, next) {
    let { email, password } = req.body;
    User.findOne({
      where: { email },
    })
      .then((result) => {
        if (result) {
          let compare = checkPassword(password, result.password);
          if (compare) {
            let token = generateToken({
              id: result.id,
              email: result.email,
            });
            res.status(200).json({
              token,
            });
          } else {
            throw {
              msg: "wrong email/password",
              code: 401,
            };
          }
        } else {
          throw {
            msg: "wrong email/password",
            code: 401,
          };
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
