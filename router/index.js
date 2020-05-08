const Router = require('express').Router()
const UserRouter = require('./user.js')
const TitleRouter = require('./title.js')
const StatusRouter = require('./status.js')


Router.use('/users', UserRouter)
Router.use('/title', TitleRouter)
Router.use('/status', StatusRouter)

module.exports = Router;