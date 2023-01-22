const uuid = require('uuid')
// destructuracion en importaciones
const { comparePassword, hashPassword } = require('../utils/crypt')


const userDB = []

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const data = userDB.filter(item => item.id === id)
    // if (data.length > 0){
    //     return data[0]
    // }else{
    //     return false
    // }
    return data.length ? data[0] : null
}

const createUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        nombre_albergue: data.nombre_albergue,
        nombre_representante: data.nombre_representante,
        email: data.email,
        password: hashPassword(data.password),
        pagina_fb: data.pagina_fb,
        celular: data.celular,
        rol: 'normal',
        logo_image: data.logo_image,
        is_active: true,
        verified: false
    }
    userDB.push(newUser)
    return newUser
}

const editUser = (id, data) => {
    const index = userDB.findIndex(user => user.id === id)
    if (index !== -1) {
        userDB[index] = {
            id: id,
            nombre_albergue: data.nombre_albergue,
            nombre_representante: data.nombre_representante,
            email: data.email,
            password: hashPassword(data.password),
            pagina_fb: data.pagina_fb,
            celular: data.celular,
            rol: data.rol,
            logo_image: data.logo_image,            
            verified: false
        }
        return userDB[index]
    } else {
        return createUser(data)
    }
}

const deleteUser = (id) => {
    const index = userDB.findIndex(user => user.id === id)
    if(index !== -1){
        userDB.splice(index, 1)
        return true
    }else{
        return false
    }
    
}

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    editUser,
    deleteUser

}