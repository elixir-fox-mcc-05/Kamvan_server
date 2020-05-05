const {verifyToken} = require('../helpers/jwt.js')
const {User} = require('../models')



function authentication(req, res, next) {
    let token = req.headers.token
    try {
        let decoded = verifyToken(token)
        let {id} = decoded

        User.findByPk(id)
            .then(data => {
                if(data){
                    req.UserId = id
                    next()
                }else{
                    res.status(401).json({
                        msg : 'login first'
                    })
                }
            })
            .catch(err => {
                res.status(500).json({error : err.message})
            })
    } catch (error) {
        res.status(401).json({error : error.message})
    }
}

module.exports = {authentication}