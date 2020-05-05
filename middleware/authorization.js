const {Todo} = require('../models')

function authorization(req,res,next){

    Todo
        .findOne({where : {id : req.params.id}})
        .then(data => {
            if(data){
                if(data.UserId == req.LoginId){
                    next()
                }else{
                    res.status(400).json({
                        err : `you're not allowed to access this task`
                    })
                }
                
            }else{
                res.status(404).json({
                    err : 'data not found'
                })
            }
        })
        .catch(err => {
            res.status(404).json({
                err : 'data not found'
            })
        })

}

module.exports = authorization