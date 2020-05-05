const Model = require('../models')
const User = Model.User
const {checkPassword} = require('../helpers/bcrypt.js')
const {generateToken} = require('../helpers/jwt.js')


class UserController {
    static register(req, res){
    const {email, password} = req.body

    User.create({ email, password })
        .then(user => {
            res.status(201).json({
                id : user.id,
                email : user.email,
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err.message
            })
        })
    }
    static logIn(req, res) {
        const {email, password} = req.body

        User.findOne({
            where : {email}
        })
            .then(result => {
                if(result){
                    let compare = checkPassword(password, result.password)
                    if(compare){
                        let token = generateToken({
                            id : result.id,
                            email : result.email
                        })
                        res.status(201).json({
                            id : result.id, email : result.email, token
                        })
                    }else(
                        res.status(400).json({
                            msg : 'Email and Password not match'
                        })
                    )
                }else{
                    res.status(400).json({
                        msg : 'Email and Password not match'
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    error : err.message
                })
            })
    }
}

module.exports = UserController;