const {User, Task} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')
const verificationGoogle = require('../helpers/Oauth')


class AllController{

    // USER LOGIN & REGISTER

    static register(req, res, next){
        let {email, password} = req.body
        User.create({
            email,
            password
        })
        .then(data => {
            let {id, email} = data
            res.status(201).json({
                id, 
                email,
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static Login(req, res, next){
        let {email, password} = req.body
        User.findOne({where: {email}})
            .then(data => {
                if(data){
                    let compare = comparePassword(password, data.password)
                    if(compare){
                        let {id, email, password, organization} = data
                        let access_token = generateToken({
                            id, 
                            email,
                            password,
                            organization
                        })
                        res.status(200).json({
                            access_token
                        })
                    } else {
                        throw{
                            msg: `password not match`,
                            code: 400
                        }
                    }
                } else {
                    throw{
                        msg: 'invalid email',
                        code: 400
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static googleLogin(req, res, next){
        let {google_token} = req.headers
        let email = null
        let newUser= false

        verificationGoogle(google_token)
            .then(payload => {
                email = payload.email
                return User.findOne({where: {email}})
            })
            .then(user => {
                if(user){
                    return user
                } else {
                    newUser = true
                    return User.create({
                        email,
                        password: process.env.DEFAULT_GOOGLE_PASS
                    })
                }
            })
            .then(user => {
                let code = newUser ? 201 : 200
                let { id, email, password } = user
                let access_token = generateToken({
                    id,
                    email,
                    password
                })

                res.status(code).json({
                    access_token
                })
            })
            .catch(err => {
                next(err)
            })
    }

    // CRUD
    // Create
    static createTask(req, res, next){
        let {title, description, point, assigned_to} = req.body
        let UserId = req.userid
        Task.create({
            title,
            description,
            point,
            assigned_to,
            UserId
        })
            .then(data => {
                res.status(201).json({
                    task: data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static readTask(req, res, next){
        Task.findAll()
            .then(data => {
                res.status(200).json({
                    tasks: data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static updateTask(req, res, next){
        let {id} = req.params
        let {title, description, point, assigned_to, category} = req.body
        let newUpdate = {
            title,
            description,
            point,
            assigned_to,
            category
        }
        Task.update(newUpdate, {
            where: {id},
            returning: true
        })
            .then(data => {
                if(data){
                    res.status(200).json({
                        task: data
                    })
                } else {
                    throw{
                        msg: 'data not found',
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteTask(req, res, next){
        let {id} = req.params
        Task.destroy({where:{id}})
            .then(data => {
                if(data){
                    res.status(200).json({
                        msg: `success delete task with id: ${id}`
                    })
                } else {
                    throw{
                        msg: 'data not found',
                        code: 404
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = AllController