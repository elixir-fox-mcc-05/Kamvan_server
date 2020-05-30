const {Task} = require('../models')

function authorization(req,res,next){

    Task
        .findByPk(req.params.id)
        .then(data => {
            
            if(data){
                if(data.UserId == req.LoginId){
                    next()
                }else{
                    res.status(400).json({
                        // err : err.message
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
            // console.log('test')
            res.status(404).json({
                err: err.message
            })
        })

}

module.exports = authorization