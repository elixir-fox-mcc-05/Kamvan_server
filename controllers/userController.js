const { User } = require('../models');
const { coompareHash } = require('../helpers/bcrypt.js');
const { generateToken } = require('../helpers/jwt.js');

class UserController {
    static register(req, res, next) {
        const { name, email, password } = req.body;

        User
            .create({
                name,
                email,
                password
            })
            .then(newUser => {
                res.status(201).json({
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    organization: newUser.organization
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body;

        User
            .findOne({
                where: {
                    email
                }
            })
            .then(user => {
                if (user) {
                    let compare = coompareHash(password,user.password);
                    if (compare) {
                        let payload = {
                            id: user.id,
                            email: user.email
                        };
                        let access_token = generateToken(payload);
                        res.status(200).json({
                            access_token
                        })
                    } else {
                        throw {
                            msg: 'Invalid email/password',
                            code: 400
                        }
                    }
                } else {
                    throw {
                        msg: 'Invalid email/password',
                        code: 400
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = UserController;
