const {Task} = require('../models')

function authorization(req, res, next){
    let {id} = req.params
    Task.findByPk(id)
        .then(data => {
            if(data){
                if(data.UserId == req.userid){
                    next()
                } else {
                    res.status(401).json({
                        msg: `unauthorized`
                    })
                }
            } else {
                res.status(400).json({
                    msg: `data not found`
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                err: `internal server error`
            })
        })
}

module.exports = authorization