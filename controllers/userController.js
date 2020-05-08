const {User} = require("../models/index.js")
const {createToken} = require("../helpers/jwt.js")
const {comparePassword} = require("../helpers/bcrypt.js")
const {OAuth2Client} = require('google-auth-library');

class userController {
    static register(req,res,next){
        let newUser = {
            email: req.body.email,
            password: req.body.password,
            organization: req.body.organization
        }
        User.create(newUser)
          .then(result =>{
            // setelah user di-register, kita akan
            res.status(201).json({
                message: "New user successfully registered",
                id: result.id,
                email: result.email
            })
          })
          .catch(error =>{
              console.log(error)
              res.status(500).json({
                  message: "Internal server error",
                  error
              })
          })
    }
    static login(req,res,next){
        let loggingUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({
            where:{
                email: loggingUser.email
            }
        })
        .then(result => {
            console.log(result)
            if(result){
                let passwordMatch = comparePassword(loggingUser.password, result.password)
                if(passwordMatch){
                    //buatkan token
                    let payload = {
                        id : result.id,
                        email : result.email,
                    }
                    let access_token = createToken(payload)
                    res.status(200).json({
                        id: result.id,
                        email: result.email,
                        access_token
                    })
                } else {
                    res.status(400).json({
                        message:"BadRequest",
                        error:"Invalid password/message"
                    })
                }
            } else {
                res.status(400).json({
                    message:"BadRequest",
                    error:"Invalid password/message"
                })
            }
            
        })
        .catch(error =>{
            console.log(error)
            res.status(500).json({
                message:"Internal Server Error",
                error
            })
        })
    }
    static googleSign(req,res,next){
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        let email = ""
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then(ticket =>{
            email = ticket.getPayload().email
            return User.findOne({
                where:{
                    email: email
                }
            })
        })
        .then(data =>{
            if(data){
                let user = {
                    id: data.id,
                    email: data.email,
                }
                let token = createToken(user)
                res.status(200).json({
                    id: data.id,
                    email: data.email,
                    access_token:token
                })
            } else {
                //jika tidak ada, daftarkan
                return User.create({
                    email,
                    password: process.env.GOOGLE_USER_PASSWORD
                })
            }
        })
        .then(data => {
            //Setelah didaftarkan, kita sign in user baru ini dengan buatkan token di sini

            let user = {
                id: data.id,
                email: data.email,
                password: data.password
            }
            let token = createToken(user)
            res.status(201).json({
                id: data.id,
                email: data.email,
                access_token: token
            })
            // setelah ini, jangan lupa buat fungsi log out di main.js client-side
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

module.exports = userController