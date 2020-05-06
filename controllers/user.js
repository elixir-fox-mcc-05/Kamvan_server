const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { decryptPassword } = require('../helpers/bcrypt')

class UserController{
    static register(req, res, next){

    }

    static login(req, res, next){

    }

    static googleSign(req, res, next){

    }
}

module.exports = UserController