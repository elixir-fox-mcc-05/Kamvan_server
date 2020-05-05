const { OAuth2Client } = require('google-auth-library');
const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')

class GoogleController {
  static googleSign(req, res, next) {
    const client = new OAuth2Client(process.env.CLIENT_ID);
    let email = ''
    console.log(req.body.id_token)
    client.verifyIdToken({
        idToken: req.body.id_token,
        audience: process.env.CLIENT_ID
      })
      .then(ticket => {
        console.log(ticket)
        email = ticket.getPayload().email
        return User.findOne({
          where: {
            email: email
          }
        })
      })
      .then(data => {
        if (data) {
          let user = {
            id: data.id,
            email: data.email
          }
          let token = generateToken(user)
          return res.status(200).json({
            id: user.id,
            email: user.email,
            access_token: token
          })
        } else {
          return User.create({
            email: email,
            password: process.env.DEFAULT_PASSWORD
          })
        }
      })
      .then(data => {
        let user = {
          id: data.id,
          email: data.email
        }
        let token = generateToken(user)
        return res.status(201).json({
          id: user.id,
          email: user.email,
          access_token: token
        })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = GoogleController