const Helper = require('../helper/helper')
const { User } = require('../models')

class Authentication {
    static authenticationUser(req, res, next) {
        if (req.headers.token) {
            try {
                let decoded = Helper.verify(req.headers.token)
                console.log(decoded);

                User.findOne({
                    where: { id: decoded.id, email: decoded.email }
                })
                    .then(data => {
                        if (data) {
                            req.UserId = decoded.id
                        } else {
                            res.status(401).json({ message: "Please Login First " })
                        }
                    })
            } catch (err) {
                res.status(401).json({ message: 'Please Login First' })
            }
        } else {
            res.status(401).json({ message: 'Please Login First' })
        }
    }
}

module.exports = Authentication