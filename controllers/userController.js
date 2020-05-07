const { User } = require('../models')
const { verifyPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        let { name, email, password, organization } = req.body;
        email = email.trim()

        User.create({
            name,
            email,
            password,
            organization
        })
        .then(user => {
            const { id, name, email, organization } = user
            res.status(201).json({
                id,
                name,
                email,
                organization
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        let { email, password } = req.body;
        email = email.trim()

        User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            if (user) {
                const { id, name, email, organization} = user
                console.log(user);
                

                if (verifyPassword(password, user.password)) {
                    let access_token = generateToken({
                        id,
                        name,
                        email,
                        organization
                    })
                    res.status(200).json({ access_token })
                } else {
                    throw {
                        msg: "Incorrect email/password",
                        code: 400
                    }
                }
            } else {
                throw {
                    msg: "Looks like you have not registered",
                    code: 401
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController