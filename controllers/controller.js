const { Task, User } = require('../models')
const { generate_password, compare_password } = require('../helpers/bcrypt')
const { generate_token } = require('../helpers/jwt')

class Controller {
    static register(req, res, next) { 
        req.body.password = generate_password(req.body.password)
        User.create({ email: req.body.email, password: req.body.password })
            .then (new_user => {
                if (new_user) {
                    console.log(new_user)
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
                      .json({ access_token, UserId: user.id })
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
                  .json({ UserId: user.id })
            })
            .catch(err => {
                next(err)
            })
    }

    static task(req, res, next) {
        Task.findAll()
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
                // throw validation error
            })
            .catch(err => {
                // throw error validation and server error
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
                // throw server error
                next(err)
            })
    }

    static delete_task(req, res, next) { 
        Task.destroy({ where: { id: req.params.taskId } })
            .then(deleted => {
                if(deleted) {
                    res
                      .status(204)
                      .json({ deleted })
                }
                // not found
            })
            .catch(err => {
                // throw server error
                next(err)
            })
    }
}

module.exports = Controller