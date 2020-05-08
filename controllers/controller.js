const { Task, User } = require('../models')
const { generate_password, compare_password } = require('../helpers/bcrypt')
const { generate_token, decode_data } = require('../helpers/jwt')

class Controller {
    static register(req, res, next) { 
        req.body.password = generate_password(req.body.password)
        User.create({ email: req.body.email, password: req.body.password, organization: req.body.organization })
            .then (new_user => {
                if (new_user) {
                    res
                      .status(201)
                      .json({ id: new_user.id, email: new_user.email })
                } else {
                    next(err)
                }
            })
            .catch(err => {
                next(err)
            })
    }// [ok]

    static login(req, res, next) { 
        User.findOne({ where: { email: req.body.email } })
            .then (user => {
                let valid = compare_password(req.body.password, user.password)
                let access_token = generate_token(user.dataValues)
                if (valid){
                    res
                      .status(200)
                      .json({ access_token, User: user })
                }
            })
            .catch(err => {
                // throw error access_token
                next(err)
            })
    }

    static logged(req, res, next) {
        User.findByPk(req.UserId)
            .then(user => {
                res
                  .status(200)
                  .json({ user })
            })
            .catch(err => {
                next(err)
            })
    }

    static google_signin(req, res, next) {
        decode_data(req.headers.google_token)
        .then(payload => {
            const { email } = payload
            let newUser = false

            return User.findOne({ where: { email } })
                .then(dataUser => {
                    if(dataUser) {
                        const token = generate_token(dataUser.dataValues)
                        
                        res
                          .status(200)
                          .json({ token })

                    } else {
                        newUser = true
                        return User.create({ email, password: process.env.DEFAULT_PASSWORD })
                            .then(new_user => {
                                let code = newUser ? 201 : 200

                                const token = generate_token(new_user.dataValues)
                                res
                                  .status(code)
                                  .json({ token })
                                })
                            .catch(err => { next(err) })
                    }
                })
                .catch(err => { next(err) })
        })
        .catch(err => { next(err) })
    }

    static task(req, res, next) {
        Task.findAll({ include: [ User ] })
            .then(tasks => {
                if (tasks) {
                    res
                      .status(200)
                      .json({ tasks })
                }
            })
            .catch(err => {
                // throw server error
                next(err)
            })
    }

    static new_task(req, res, next) { 
        Task.create({ title: req.body.title, description: req.body.description, category: req.body.category, UserId: req.UserId })
            .then (new_task => {
                if (new_task) {
                    res
                      .status(201)
                      .json({ new_task })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static task_id(req, res, next) { 
        Task.findOne({ where: { id: req.params.taskId }, include: [ User ] })
            .then(task_by_id => {
                if(task_by_id) {
                    res
                      .status(200)
                      .json({ task_by_id })
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static edit_task(req, res, next) {
        if (req.body.category != null || req.body.category != undefined || req.body.category != 'SELECT') {
            Task.update({ category: req.body.category }, { where: { id: req.params.taskId } })
                .then(edited => {
                    if (edited) {
                        res
                          .status(200)
                          .json({ edited })
                    }
                })
                .catch(err =>{
                    next(err)
                })
        } else {
            next(err)
        }
    }

    static delete_task(req, res, next) { 
        Task.destroy({ where: { id: req.params.taskId } })
            .then(deleted => {
                if(deleted) {
                    res
                      .status(204)
                      .json({ deleted })
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = Controller