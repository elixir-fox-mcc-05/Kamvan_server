let { User , Task } = require('../models')
let { comparehash } = require('../helpers/bcryptjs.js') 
let { genToken } = require('../helpers/jwt.js')


class UserCon {
    static login (req,res) {
        let {email,password} = req.body
        console.log(req.body)
        User.findOne({
            where : {
                email
            }
        })
        .then(result=>{
            if(result) {
                let check = comparehash(password,result.password)
                if (check) {
                    let obj = {
                        id : result.id,
                        email : result.email,
                        org : result.org
                    }
                    let token = genToken(obj)
                    res.status(200).json({
                        token
                    })
                    console.log(token)
                } else {
                    res.status(400).json({
                        msg : 'wrong email/password'
                    })
                }
            } else {
                res.status(400).json({
                    msg : 'wrong email/password'
                })
            }
        })
        .catch(err=>{
            res.status(400).json({
                msg : 'wrong email/password'
            })
        })
    }

    static register(req,res) {
        let {email,password,confirm_password,org} = req.body

        if(password!=confirm_password) {
            res.status(400).json({
                error : "password doesn't match with confirm password "
            })
        } else {
            User.create({
                email,
                password,
                org
            })
            .then(result=>{
                res.status(201).json({
                    msg : 'successfully register',
                    result
                })
            })
            .catch(err=>{
                res.status(400).json({
                    error : err.errors[0].message
                })
            })
        }
    }

    static userRegOrgList(req,res) {
        User.findAll({})
        .then(result=>{
            let orgList = []
            result.forEach(element => {
                orgList.push(element.org) 
            });
            res.status(200).json({
                orgList
            })
        })
        .catch(err=>{
            res.status(500).json({
                msg: 'internal server error'
            })
        })
    }
}


module.exports = UserCon