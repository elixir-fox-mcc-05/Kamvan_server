module.exports = {
    errorHandler: (err, req, res, next) => {
        if(err.name === 'JsonWebTokenError') {
            res.status(401).json({
                message: "You must login to access this service"
            })
        } else if (Array.isArray(err.errors)) {
            const errors = [];
            for (let error of err.errors) {
                errors.push(error.message);
            }
            res.status(400).json({
                error: errors
            })
        } else {
            res.status(err.code || 500).json({
                error: err.message
            });
        }
    }
}