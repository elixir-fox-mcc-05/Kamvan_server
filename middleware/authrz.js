const { Title } = require('../models')

function authorization (req, res, next) {
    let { id } = req.params

    Title.findByPk(id)
        .then(title => {
            if(title){
                if(title.UserId == req.UserId){
                    next()
                }else{
                    res.status(401).json({
                        msg : 'Unauthorized'
                    })
                }
            }else{
                res.status(404).json({
                    msg : 'title not Found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            })
        })
}



module.exports = authorization;