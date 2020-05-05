const {User} = require('../models')


class UserController{

    static login(req,res,next){
        // let {email,password} = req.body

        User
            .findOne({where : {email : req.body.email}})
            .then(data => {
                if(data) {
                    if(req.body.password == data.password){
                        res.status(200).json({
                            token
                        })
                    }
                }else {
                    res.status(400).json({
                        err : 'invalid email'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static register(){
        let {email,password} = req.body

        User
            .create({email,password})
            .then(data => {
                res.status(201).json({
                    id : data.id,
                    email : data.email
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController