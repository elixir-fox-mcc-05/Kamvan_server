const { compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { User } = require('../models')

class UserController {
  static register(req, res, next) {
    let { email, password, verifypassword } = req.body
    console.log({ email, password, verifypassword });
    if (password == verifypassword) {
      User.create({
          email: email,
          password: password,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .then(data => {
          console.log(data)
          let payload = { id: data.id, email: data.email }
          let access_token = generateToken(payload)
          console.log(access_token);
          return res.status(200).json({
            'access_token': access_token
          })
        })
    } else next({
        name: 'BadRequest',
        errors: [{ msg: 'Verify Password Mismatch' }]
      })
      .catch(err => {
        next(err)
      })
  }

  static login(req, res, next) {
    let { email, password } = req.body
    User.findOne({ where: { email: email } })
      .then(data => {
        if (data) {
          let decrypted = compare(password, data.password)
          if (decrypted) {
            let payload = { id: data.id, email: data.email }
            let access_token = generateToken(payload)
            return res.status(200).json({
              'access_token': access_token
            })
          } else next({
            name: 'BadRequest',
            errors: [{ msg: 'Invalid Email/Password' }]
          })

        } else next({
          name: 'BadRequest',
          errors: [{ msg: 'Invalid Email/Password' }]
        })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController