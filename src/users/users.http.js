const userController = require('./users.controller')

const getAll = () => {
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
    else{
        const response = userController.createUser(data)
        return res.status(201).json({message: `User created succefully with id: ${resposne.id}`, user: response})
    }
}

module.exports = {
    getAll,
    getById,
    register
}