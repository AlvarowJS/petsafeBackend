const bcrypt = require('bcrypt')

// plain = plano 
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

// hashed = ya se encripto
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}


