const { User } = require('../models')
const Helper = require('../helper/helper')

class Controller {
    static signUp(req, res, next) {
        const { name, email, password } = req.body

        User.create({
            name,
            email,
            password
        })
            .then(newUser => {
                res.status(201).json({
                    id: newUser.id,
                    email: newUser.email,
                    password: newUser.password
                })
            })
            .catch(err => {
                res.status(400).json({
                    msg: err.message
                })
            })
    }

    static signIn(req, res, next) {
        const { email, password } = req.body

        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    let compare = Helper.comparePassword(password, user.password)
                    if (compare) {
                        let token = Helper.generateToken({ id: user.id, email: user.email })
                        res.status(200).json({ token })
                    } else {
                        res.status(400).json({ message: 'Invalid Email/Password' })
                    }
                } else {
                    res.status(400).json({ message: 'Invalid Email/Password' })
                }
            })
            .catch(err => {
                res.sattus(500).json({ message: 'Internal server error' })
            })
    }
}

module.exports = Controller