'use strict'

const { User } = require(`../models`)
const { compare } = require(`../helpers/bcrypt`)
const { generateToken } = require(`../helpers/jwt`)
const mailer = require(`../helpers/mailer`)
const  googleAuth = require(`../helpers/gauth`)

require('dotenv').config()

class UserController {

    static create ( req, res) {
        const { email, password, organization } = req.body
        let newUser = {
            email,
            password,
            organization
        }
        
        User.create(newUser)
            .then(result => {
                let maskedpassword = `XX`+ (password.substr(2, password.length));
                let mail = {
                    subject : `Your registration detail`,
                    message : `Included here is your login credential to the todo app, try to keep it safe<br>
                    email : ${email}<br>
                    password : ${maskedpassword}`
                }
                mailer(email, mail.subject, mail.message)
                res.status(201).json({
                    User : result
                })
            })
            .catch(err => {
                res.status(500).json({
                    Error : err.message
                })
            })
    }

    static getUsers( req, res) {
        User.findAll({})
            .then(result => {
                res.status(200).json({
                    Users : result
                })
            })
            .catch(err => {
                res.status(500).json({
                    Error : err.message
                })
            })
    }

    static deleteUser ( req, res) {
        User.destroy({
            where : {
                id : Number(req.params.id)
            }
        })
        .then(result => {

            if(result){
                res.status(200).json({
                    Users : result
                })
            } else {
                res.status(400).json({
                    Error :{
                        message : `ID not found`
                    } 
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                Error : err.message
            })
        })
    }

    static login ( req, res) {
        const { email, password} = req.body
        User.findOne({
                where : {
                    email : email
                }
            })

            .then(result => {
                if(result){
                    if(compare(password, result.password)){
                        let newToken = {
                            UserId : result.id
                        }
                        res.status(200).json({
                            token : generateToken(newToken)
                        })
                    } else {
                        res.status(401).json({
                            Error : {
                                message : `Email & password combination is invalid`
                            }
                        })
                    }
                } else {
                    res.status(401).json({
                        Error : {
                            message : `Unregistered email`
                        }
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    Error : err.message
                })
            })
    }

    static googleSign( req, res, next) {
        let token = req.headers.google_token;
        // console.log(token)
        googleAuth(token)
            .then ( data => {
                return User
                    .findOne({
                        where : {
                            email : data.email
                        }
                    })
                    .then( result => {
                        if(result){
                            return result;
                        } else {
                            return User.create({
                                email : data.email,
                                password : process.env.GAuth_pass
                            })
                        }
                    })
            })
            .then( result => {
                let newToken = {
                    UserId : result.id
                }
                res.json({
                    token : generateToken(newToken)
                })
            })
            .catch( err => {
                res.status(500).json({
                    err
                })
            })  

        
    }

}

module.exports = UserController