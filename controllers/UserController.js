const { User } = require('../models');
const { compare } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');
const verificationGoogle = require('../helpers/googleOauth.js');

class UserController {
  static login(req, res, next) {
    let { email, password } = req.body;
    User.findOne({
      where: {
        email
      }
    })
      .then(result => {
        if (result) {
          console.log(result);
          if (compare(password, result.password)) {
            let token = generateToken({
              id: result.id,
              email: result.email
            });
            res.status(200).json({
              UserId: result.id,
              token
            });
          } else {
            return next({
              code: 401,
              message: 'Password does not match'
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
  static googleLogin(req, res, next) {
    let googleToken = req.headers.google_token;
    let first_name = req.headers.first_name;
    let last_name = req.headers.last_name;
    let email = null;
    let newUser = false;

    verificationGoogle(googleToken)
      .then(payload => {
        email = payload.email;
        console.log(email);
        return User.findOne({
          where: {
            email
          }
        });
      })
      .then(user => {
        if (user) {
          return user;
        } else {
          newUser = true;
          return User.create({
            first_name,
            last_name,
            email,
            password: process.env.DEFAULT_GOOGLE_PASSWORD
          });
        }
      })
      .then(user => {
        let code = newUser ? 201 : 200;

        let token = generateToken({
          id: user.id,
          email: user.email
        });

        res.status(code).json({
          UserId: user.id,
          token
        });
      })
      .catch(err => {
        return next(err);
      });
  }
}

module.exports = UserController;
