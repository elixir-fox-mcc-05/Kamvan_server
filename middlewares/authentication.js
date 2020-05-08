const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt.js');

module.exports = {
    authenticateUser: (req, res, next) => {
        let { token } = req.headers;
        
        try {
            let decoded = verifyToken(token);
            let { id, email, fullname, organization } = decoded;
            User
                .findByPk(id)
                .then(result => {
                    if(result) {
                        req.userId = id;
                        req.userEmail = email;
                        req.userFullname = fullname;
                        req.userOrganization = organization;
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