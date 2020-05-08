const { verifyToken } = require('../helpers/jsonwebtoken.js');
const { User } = require('../models');

function authentication (req, res, next) {
    let token = req.headers.token;
    try {
        let decoded = verifyToken(token)
        let { id } = decoded;
        User.findByPk(id)
            .then(user => {
                if (user) {
                    req.currentUserId = id;
                    req.currentOrganization = user.organization;
                    next();
                } else {
                    next({
                        name: 'Not Found',
                        errors: [{ message: `id tidak ditemukan`}]
                    })
                }
            })
            .catch(err => {
                next({
                    name: 'Internal Server Error',
                    errors: [{ message: err.message }]
                })
            });
    } catch (err) {
        next(err);
    }
}

module.exports = authentication;