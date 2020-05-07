const { User } = require('../models');
const { compare } = require('../helpers/bycrypt.js');
const { generateToken } = require('../helpers/jsonwebtoken.js');

class UserController {
    static register(req, res, next) {
        const { email, password, name, organization } = req.body;
        const values = {
            email,
            password,
            name,
            organization
        };
        User
            .create(values)
                .then(user => {
                    res.status(201).json({ id: user.id, email: user.email, organization: user.organization });
                })
                .catch(err => {
                    next(err)
                })
    }

    static login(req, res, next) {
        let { email, password } = req.body;
        User
            .findOne({ where: { email }}) 
                .then(user => {
                    if (user) {
                        if (compare(password, user.password)) {
                            const token = generateToken({ id: user.id, email: user.email });
                            res.status(200).json({ Token: token });
                        } else {
                            next({
                                name: 'Bad Request',
                                errors: `Email atau password salah`
                            })
                        }
                    } else {
                        next({
                            name: 'Bad Request',
                            errors: `Email atau password salah`
                        })
                    }
                })
                .catch(err => {
                    next({
                        name: `Internal Server Error`,
                        errors: { message: err.message }
                    })
                })
    }
}

module.exports = UserController;