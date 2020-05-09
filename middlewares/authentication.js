const { User } = require('../models')
const { verify } = require('../helpers/jwt')

function authentication(req, res, next) {
    let decode = verify(req.headers.access_token)

    User.findByPk(decode.id)
        .then(user => {
            if (user) {
                req.UserId = user.id
                next()
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authentication