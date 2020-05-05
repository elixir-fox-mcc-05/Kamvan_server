let { decodedToken } = require('../helpers/jwt.js')
let { User } = require('../models')

function authentication (req,res,next) {
    let token = req.headers.token
    let decToken = decodedToken(token)
    User.findOne({
        where : {
            email : decToken.email
        }
    })
    .then(find=>{
        if(find) {
            next()
        } else {
            res.status(401).json({
                error : 'Unauthorize User , please loin first'
            })
        }
    })
    .catch(err=>{
        res.status(401).json({
            error : 'Unauthorize User , please loin first'
        })
    })
}


module.exports = authentication