const {Usertask,Task} = require("../models")

function Authorization(req,res,next){
    
    console.log(req.params.id,req.currentuserid);
    Usertask.findOne({
        where :{
            TaskId:+req.params.id,
            UserId:+req.currentuserid
        }
    })
    .then(result=>{
        if (result != null){
            return next()
        }else{
            // console.log("yeayyyy");
            console.log(result);
            return res.status(401).json({
                msg:"UnAuthorized",
                data:result
            })
        }
    })
    .catch(err=>{
        
        return res.status(401).json({
            msg:"UnAuthorized"
        })
    })
}
module.exports = Authorization