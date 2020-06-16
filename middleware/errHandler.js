module.exports= (err,req,res,next) => {

    if(err == 'JsonWebTokenError'){
        res.status(401).json({
            error : 'unable to access, please login again'
        })
    } else {
        res.status(err.code || 500).json({
            error : err.message
        })
    }
}