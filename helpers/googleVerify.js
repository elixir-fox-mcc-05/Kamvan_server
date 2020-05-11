const axios = require('axios')
function verifygmail(req,res,next){
    axios.get('https://oauth2.googleapis.com/tokeninfo?id_token='+req.headers.token)
    .then(result=>{
        console.log(result.data.email);
        req.currentGmailId = result.data.email
        return next()
    })
    .catch(err=>{
        return err
    })
}
module.exports = verifygmail