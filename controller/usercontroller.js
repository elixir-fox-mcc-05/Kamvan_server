"use strict";
const {User} = require('../models');
const {compare} = require('../helpers/bcrypt');
const {generateToken} = require('../helpers/jwt');

class UserController {
    static register(req, res, next){
        const {email, password, confirmPassword, organization} = req.body;
        const value = {
            email,
            password,
            organization,
        };
        if(password !== confirmPassword){
            return res.status(400).json({
                code : 400,
                type : "Bad Request",
                msg : "Password doesn't match"
            });
        }
        User
            .create(value)
            .then(data => {
                res.status(201).json({
                    id : data.id,
                    email : data.email,
                    organization : data.organization
                });
            })
            .catch(err => {
                res.status(500).json({
                    code : 500,
                    type : "Internal Server Error",
                    msg : "Something Went Wrong"
                });
            });
    }
    static login(req, res, next) {
        const {email, password} = req.body;
        User
            .findOne({
                where:{
                    email,
                }
            })
            .then(user => {
                if(compare(password, user.password)){
                    const token = generateToken({
                        id : user.id,
                        email : user.email,
                        organization : user.organization
                    });
                    res.status(202).json({
                        acces_token : token
                    });
                } else {
                    res.status(400).json({
                        code : 400,
                        type : "Bad Request",
                        msg : "Password Doesn't Match"
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    code: 500,
                    type : "Internal Server Error",
                    msg : "Something Went Wrong"
                });
            });
    }
}

module.exports = UserController;