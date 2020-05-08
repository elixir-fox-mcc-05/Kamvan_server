const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const googleVerification = require('../helpers/googleOauthApi.js');

class UserController {
  static register(req, res, next) {
    let { email, password, name, organization } = req.body;
    User.create({
      email,
      password,
      name,
      organization
    })
      .then((data) => {
        res.status(201).json({
          id: data.id,
          email: data.email,
          organization: data.organization
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

  static googleLogin(req, res, next) {
    let email = null;
    let google_token = req.headers.google_token;
    let newUser = false;
    let name = null;
    googleVerification(google_token)
        .then(payload => {
            email = payload.email;
            name = payload.name;
            return User
                .findOne({ where: { email } })
        })
        .then(user => {
            if (user) {
                return user;
            } else {
                newUser = true;
                return User
                    .create({
                        name,
                        email,
                        password: process.env.DEFAULT_GOOGLE_PASSWORD
                    })
            }
        })
        .then(user => {
            let code = newUser ? 201 : 200;
            const token = generateToken({ id: user.id, name: user.name, email: user.email })
            res.status(code).json({
                token
            })
        })
        .catch(err => {
            next(err)
        })
}
}

module.exports = UserController;
