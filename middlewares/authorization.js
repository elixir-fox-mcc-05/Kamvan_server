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
                res.status(401).json({
                    name:"Unauthorized", 
                    error: [{message: "User unauthenticated"}]
                })
            }
        } else {
            return next({
                name:"User Not Found", 
                errors: [{message: "User Not Found"}]
            })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            message:"Internal Server Error",
            error
        })
    })
}

module.exports = authorization