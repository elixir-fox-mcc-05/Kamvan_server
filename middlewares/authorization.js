const { Task } = require("../models/index.js")

function authorization(req,res,next){
  let selectedId = req.params.id
  Task.findOne({
    where:{
        id: selectedId
    }
  })
    .then(result => {
        if(result){
            if(result.UserId === req.currentUserId){
                return next()
            } else{
                return next({
                    message:"Unauthorized request", 
                    errors: [{message: "User unauthorized to make this request"}]
                })
            }
        } else {
            return next({
                message:"BadRequest", 
                errors: [{message: "Invalid request"}]
            })
        }
    })
    .catch(err => {
        next({
            message:"Internal Server Error",
            error:err
        })
    })
}

module.exports = authorization