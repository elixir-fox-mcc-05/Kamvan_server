const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt.js');

module.exports = {
    authenticateUser: (req, res, next) => {
        let { token } = req.headers;
        
        try {
            let decoded = verifyToken(token);
            let { id } = decoded;
            User
                .findByPk(id)
                .then(result => {
                    if(result) {
                        req.userId = id;
                        next();
                    } else {
                        throw {
                            message: "Unauthorized User",
                            code: 401
                        }
                    }
                })
                .catch(err => {
                    next(err);    
                })
        } catch(err) {
            next(err);
        }
    }
}