"use strict";
const {User} = require('../models');
const {compare} = require('../helpers/bcrypt');
const {generateToken} = require('../helpers/jwt');
const verificationToken = require('../helpers/googleOauthApi');

class UserController {
    static register(req, res, next){
        const {email, password, confirmPassword, organization} = req.body;
        const value = {
            email,
            password,
            organization,
        };
        if(password !== confirmPassword){
            return next({
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
                return next(err);
            });
    }
    static login(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;
        User
            .findOne({
                where:{
                    email,
                }
            })
            .then(user => {
                if(!user){
                    return next({
                        type : "Bad Request",
                        code : 400,
                        msg : "User Doesn't Exist"
                    });
                } else if(compare(password, user.password)){
                    const token = generateToken({
                        id : user.id,
                        email : user.email,
                        organization : user.organization
                    });
                    res.status(202).json({
                        acces_token : token
                    });
                } else {
                    return next({
                        code : 400,
                        type : "Bad Request",
                        msg : "Password Doesn't Match"
                    });
                }
            })
            .catch(err => {
                return next(err);
            });
    }
    static googleLogin(req, res, next){ 
        let google_token = req.headers.google_token;
        let email = null;
        let newUser = false;
        verificationToken(google_token)
            .then(payload => {
                email = payload.email;
                return User.findOne({
                    where : {
                        email
                    }
                });
            })
            .then(user => {
                if(user){
                    return user;
                } else {
                    newUser = true;
                    return User
                        .create({
                            email,
                            password : process.env.Default_user_password
                        });
                }
            })
            .then(user => {
                let code = newUser ? 202 : 201;
                let token = generateToken({
                    id : user.id,
                    email : user.email
                });
                res.status(code).json({
                    Token : token
                });
            })
            .catch(err => {
                return next(err);
            });
    }
}

module.exports = UserController;