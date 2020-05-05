'use strict'

const {User} = require('../models')
const {compare} = require('../helpers/bcrypt.js')
const {userToken} = require('../helpers/jwt.js')

class UserController {

    static register(req, res) {
        let {username, email, password} = req.body;
        User.create({
            username,
            email,
            password
        })
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                next(err);
            });
    }

    static login(req, res, next) {
        let {email, password} = req.body;
        User.findOne({
            where: {
                email : email
            }
        })
            .then(result => {
                if (result) {
                    let check = compare(password, result.password);
                    if (check) {
                        let token = userToken({
                            id : result.id,
                            email : result.email
                        })
                        res.status(200).json({token})
                    }
                    else {
                        throw {
                            msg: `Email or Password is wrong`,
                            code: 401
                        };
                    }
                }
                else {
                    throw {
                        msg: `Email or Password is wrong`,
                        code: 401
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = UserController;