const brypt = require('bcrypt')

module.exports = { encrypt : (password) => {
    const salt = brypt.genSaltSync(process.env.SALT)
    // console.log(salt)
   return brypt.hashSync(password,salt)
},

compare : (password,cryptpassword) => {
    return brypt.compareSync(password,cryptpassword)
}

}