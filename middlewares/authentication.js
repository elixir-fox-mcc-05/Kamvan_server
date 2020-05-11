const {verify} = require("../helpers/jwt")
const {User} = require("../models")

function Authentication(req,res,next){
    
    console.log(req.headers.token);
        let veri = verify(req.headers.token)
        
        if (veri){

            User.findOne({
                where:{
                    username:veri.username
                }
            })
            .then(result=>{
                console.log('author sucess');
                req.currentuserid = result.id
                return next()
            })
            .catch(err=>{
                res.status(400).json({
                    msg:"Invalid user"
                })
            })

            
        }else{
            res.status(400).json({
                msg:"Invalid user"
            })
            
        }
   
    
}

module.exports = Authentication