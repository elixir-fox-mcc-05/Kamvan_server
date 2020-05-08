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
            req.currentUserOrganization = result.organization
            req.currentUserId = result.id
            return next()
        } else {
            next({
              message:"User not found",
              error: "User not found. Please register first"
            })
        }
      })
      .catch(error =>{
        next({
            message:"Internal Server Error", 
            error: error
        })
      })
  }
  catch(error){
    next({
        message: "Internal Server Error",
        error
    })
  }
}

module.exports = authentication