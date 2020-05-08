let { decodedToken } = require('../helpers/jwt.js')
let { Task } = require('../models')

function authorization (req,res,next) {
    console.log('masuk authorization')
    console.log(req.params.id)
    let token = req.headers.token
    let decToken = decodedToken(token)
    Task.findByPk(req.params.id)
    .then(result=>{
        if(result) {
            if(result.user_id==decToken.id) {
                next()
            } else {
                res.status(401).json({
                    error : "you don't have permision to edit or delete this task"
                })
            }
        } else {
            res.status(401).json({
                error : "Task doesn't exists or has been deleted"
            })
        }
    })
    .catch(err=>{
        res.status(401).json({
            error : "Task doesn't exists or has been deleted"
        })
    })
}


module.exports = authorization