const { User } = require("../models/index.js")
const { verifyToken } = require("../helpers/jwt.js")


function authentication(req,res,next){
  try{
    const decodedUser = verifyToken(req.headers.access_token)
    User.findOne({
        where:{
            id:decodedUser.id
        }
    })
      .then(result=>{
        if(result){
            req.currentUserId = result.id
            return next()
        } else {
            res.status(400).json({
                message:"User not found",
                error: "User not found"
            })
        }
      })
      .catch(error =>{
        res.status(401).json({
            name:"User Not Authorized", 
            errors: "User Not Authorized"
        })
      })
  }
  catch(err){
    res.status(500).json({
        message: "Internal Server Error",
        error
    })
  }
}

module.exports = authentication