const { response } = require('express')
const userController = require('./users.controller')

const getAll = (req, res) => {
    const data = userController.getAllUsers()
    res.status(200).json({ items: data.length, users: data })
}

const getById = (req, res) => {
    const id = req.params.id
    const data = userController.getUserById()

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: `El usuario con el id ${id} no existe` })
    }
}

const register = (req, res) => {
    const data = req.body
    if (!data) {
        return res.status(400).json({ message: 'Missing data' })
    }
    if (
        !data.nombre_albergue ||
        !data.nombre_representante ||
        !data.email ||
        !data.password ||
        !data.pagina_fb ||
        !data.celular ||
        !data.logo_image
    ) {
        return res.status(400).json({
            message: 'All fields must be completed', fields: {
                nombre_albergue: 'string',
                nombre_representante: 'string',
                email: 'example@example.com',
                password: 'string',
                pagina_fb: 'string',
                celular: '999333999',
                logo_image: 'urlimage'
            }
        })
    }
    else {
        const response = userController.createUser(data)
        return res.status(201).json({ message: `User created succefully with id: ${response.id}`, user: response })
    }
}

const remove = (req, res) => {
    const id = req.params.id
    const data = userController.deleteUser(id)

    if (data) {
        return res.status(201).json({ message: `User deleted succefully with id: ${response.id}`, user: response })
    } else {
        return res.status(400).json({ message: 'Invalid ID' })
    }

}

const edit = (req, res) => {
    const id = req.params.id
    const data = req.body

    if (!data) {
        return res.status(400).json({ message: 'Missing Data' })
    }
    else if (
        !data.nombre_albergue ||
        !data.nombre_representante ||
        !data.email ||
        !data.password ||
        !data.pagina_fb ||
        !data.celular ||
        !data.logo_image
    ) {
        res.status(400).json({
            message: "All fields must be completed",
            fields: {
                nombre_albergue: 'string',
                nombre_representante: 'string',
                email: 'example@example.com',
                password: 'string',
                pagina_fb: 'string',
                celular: '999333999',
                logo_image: 'urlimage'
            }
        })
    } else {
        const response = userController.editUser(id, data)
        return res.status(200).json({
            message: 'User edited sucessfully',
            user: response
        })
    }

}

const editMyUser = (req, res) => {
    const id = req.user.id
    const data = req.body

    if (!Object.keys(data).length) {
        return res.status(400).json({ message: "Missing Data" })
    } else if (
        !data.nombre_albergue ||
        !data.nombre_representante ||
        !data.email ||
        !data.password ||
        !data.pagina_fb ||
        !data.celular ||
        !data.logo_image
    ) {
        res.status(400).json({
            message: "All fields must be completed",
            fields: {
                nombre_albergue: 'string',
                nombre_representante: 'string',
                email: 'example@example.com',
                password: 'string',
                pagina_fb: 'string',
                celular: '999333999',
                logo_image: 'urlimage'
            }
        })
    } else {
        const response = userController.editUser(id,data)
        return res.status(200).json({
            message: 'User edited succesfully',
            user: response
        })
    }
}

module.exports = {
    getAll,
    getById,
    register,
    remove,
    edit,
    editMyUser,
    
}