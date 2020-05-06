const { verifyToken } = require('../helpers/jwt.js');
const { User } = require('../models/index.js');

function authentication(req, res, next){
    let token = req.headers.token;
    try {
        let decoded = verifyToken(token);
        let { id, email, organization } = decoded
        User.findByPk(Number(id))
            .then(data => {
                if(data) {
                    req.currentUserId = Number(id);
                    req.currentUserOrganization = organization;
                    req.currentUserEmail = email;
                    return next()  
                }
                else {
                    return next({
                        name: 'NotFound',
                        errors: [{ 
                            message: 'User not found' 
                        }]
                    })
                }
            })
            .catch (err => {
                return next ({
                    name: `Unauthorized`,
                    errors: [{
                        message: 'User Unauthenticated' 
                    }]
                })
            })
      } catch(err) {
        next(err)
      }

}

module.exports = authentication;