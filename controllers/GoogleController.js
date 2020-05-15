const { OAuth2Client } = require('google-auth-library');
const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')

class GoogleController {
    static googleLogin(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = ''
        client.verifyIdToken({
                idToken: req.headers.id_token,
                audience: process.env.CLIENT_ID
            })
            .then(ticket => {
                email = ticket.getPayload().email
                return User.findOne({
                    where: {
                        email
                    }
                })
            })
            .then(data => {
                if (data) {
                    let payload = {
                        id: data.id,
                        email: data.email
                    }
                    let token = generateToken(payload)
                    return res.status(200).json({
                        'access_token': token
                    })
                } else {
                    return User.create({
                        email,
                        password: process.env.DEFAULT_PASSWORD
                    })
                }
            })
            .then(data => {
                let payload = {
                    id: data.id,
                    email: data.email
                }
                let token = generateToken(payload)
                return res.status(201).json({
                    'access_token': token
                })
            })
            .catch(err => {
                return next(err)
            })
    }
}

module.exports = GoogleController