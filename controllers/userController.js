const { User } = require('../models')
// const {encrypt,compare} = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const googleVerification = require('../helpers/googleOAuth')
// const io = require('socket.io')

module.exports = function (io) {

  class UserController {

    static login(req, res, next) {
      let { email, password } = req.body
      // console.log('masuk')
      User
        .findOne({ where: { email } })
        .then(data => {
          if (data) {
            if (password == data.password) {
              let token = generateToken({ id:data.id, organization:data.organization})
              // io.emit('message',token)
              io.emit('log',`${data.first_name} has loggedin`)
              res.status(200).json({
                first_name: data.first_name,
                token
              })
            }else{
              res.status(400).json({
                err: 'invalid password'
              })
            }
          } else {
            res.status(400).json({
              err: 'invalid email'
            })
          }
        })
        .catch(err => {
          console.log(err)
          res.status(400).json({
            error: 'unable to login'
          })
        })
    }

    static register(req, res, next) {
      let { first_name, last_name, password, email, organization } = req.body
      let newUser = { first_name, last_name, password, email, organization }
      // const io = req.app.get('socketio')
      console.log(req)
      // const socketId = req.body.message.socketId
      // const senderSocket = io.sockets.connected[socketId]
      // console.log(newUser)
      User
        .create(newUser)
        .then(data => {
          // console.log('test')
          // io.emit('log', 'comp')
          res.status(201).json({
            id: data.id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            organization: data.organization
          })
        })
        .catch(err => {
          // console.log(err)
          res.status(404).json({

            error: err.message.split(',')
          })
        })
    }

    static googleLogin(req, res, next) {
      let google_token = req.headers.google_token;
      let email = null;
      let newUser = false;
      let first_name = null;
      let last_name = null
      // console.log(google_token)
      googleVerification(google_token)
        .then(payload => {
          // console.log(payload)
          email = payload.email;
          first_name = payload.given_name;
          last_name = payload.family_name;
          // console.log('payload: ', payload)
          // console.log('emaul: ', email)
          return User
            .findOne({
              where: {
                email
              }
            })
        })
        .then(user => {
          // console.log('errr')
          if (user) {
            return user;
          } else {
            newUser = true;

            return User
              .create({
                first_name,
                last_name,
                email,
                password: process.env.DEFAULT_GOOGLE_PASSWORD
              });
          }
        })
        .then(user => {
          let code = newUser ? 201 : 200;

          // const token = generateToken({
          //   id: user.id,
          //   email: user.email
          // });
          io.emit('log',`${user.first_name} has loggedIn`)
          res.status(code).json({
            token: generateToken({
              data: {
                id: user.id,
                email: user.email
              }
            })
          });
        })
        .catch(err => {
          // console.log('errrr')
          next(err);
        })
    }

    

  }

  return UserController
}