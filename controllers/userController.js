const {User} = require("../models/index.js")
const {createToken} = require("../helpers/jwt.js")
const {comparePassword} = require("../helpers/bcrypt.js")

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
}

module.exports = userController