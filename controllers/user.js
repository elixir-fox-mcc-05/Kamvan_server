let { OAuth2Client } = require('google-auth-library');
let {User} = require('../models/index')
let {compare} = require('../helpers/bycrypt')
let {jwtToken} = require('../helpers/jwt')
class UserController {
    static login (req,res) {
        User.findOne({where : {email : req.body.email}})
        
        .then((result) => {
            if(result) {
                if(compare(req.body.password, result.password)) {
                    
                    let access_token = jwtToken({
                        id: result.id,
                        email: req.body.email
                    })
                    res.status(200).json({
                        access_token
                    })
                } else {
                    res.status(400).json({
                        msg: 'wrong password / email'
                    })
                }
            } else {
                res.status(500).json({
                    msg: 'wrong password / email'
                })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                msg: 'internal error'
            })
        });
    }

    static register (req,res) {
        let data = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(data)
        .then((result) => {
            res.status(200).json({
                data: result
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                msg: 'internal error'
            })
        });
    }    

    static googleLogin (req,res) {
        let temp = new OAuth2Client(process.env.CLIENT_ID)
        let email = ''
        temp.verifyIdToken({
        idToken: req.body.id_token,
        audience: process.env.CLIENT_ID
        })
        .then(token => {
            // console.log(token);
        email = token.getPayload().email
        return User.findOne({
            where : {
            email
            }
        })
        })
            .then(data => {
                if(data) {
                    let payload = {
                        id:data.id,
                        email:data.email
                    }
                    let access_token = jwtToken(payload)
                    res.status(200).json({
                        access_token
                    })
                } else {
                    User.create({
                        email,
                        password: process.env.GOOGLE_PASSWORD
                    })
                    .then(data => {
                        console.log(data);
                        let result = {
                            id: data.id,
                            email: data.email
                        }
                        let access_token = jwtToken(result)
                        res.status(200).json({
                            access_token
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
            })
            
    }    
}

module.exports = UserController