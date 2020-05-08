const { User } = require('../models/index.js');
const { checkPassword } = require('../helpers/bcryptjs.js');
const { generateToken } = require('../helpers/jwt.js');

class UserController {
    // router.post('/register', UserController.registerUser);
    static registerUser (req, res, next){
        let { email, password } = req.body;
        let input = {
            email,
            password
        }
        User.create(input)
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    email: data.email,
                    organization: data.organization
                });
            })
            .catch(err => {
                next(err);
            })
    }

    // router.post('/login', UserController.loginUser);
    static loginUser (req, res, next){
        let { email, password } = req.body;
        let options = {
            where: {
                email
            }
        }
        User.findOne(options)
        .then (data => {
            if(data){
                let compare = checkPassword(password, data.password);
                if (compare){
                    let token = generateToken({
                        id: data.id,
                        email: data.email,
                        organization: data.organization
                    })
                    res.status(201).json({token, id:data.id, email:data.email, organization: data.organization});
                }
                else {
                    throw next({
                        name: `BadRequest`,
                        errors: [{
                            message: `Invalid E-Mail/Password`
                        }]
                    })
                }
            }
            else {
                throw next({
                    name: `BadRequest`,
                    errors: [{
                        message: `Invalid E-Mail/Password`
                    }]
                })
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController;