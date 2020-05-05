const Router = require('express').Router()
const UserRouter = require('./user.js')
const TitleRouter = require('./title.js')


Router.use('/users', UserRouter)
Router.use('/title', TitleRouter)

module.exports = Router;