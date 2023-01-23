const {getUserByEmail} = require('../users/users.controller')
const { comparePassword } = require('../utils/crypt')

const loginUser = (email, password) => {
    const user = getUserByEmail(email)
    if(user){
        const verify_password = comparePassword(password, user.password)
        return verify_password ? user : false
    }
    return false
 
}

module.exports = {
    loginUser
}