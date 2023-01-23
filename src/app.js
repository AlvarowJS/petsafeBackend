// Dependencias
const express = require('express')
const passport = require('passport')
require('./middleware/auth.middleware')(passport)

// Rutas
const userRouter = require('./users/users.routes').router
const authRouter = require('./auth/auth.routes').router

const app = express()

// para poder usar el body y todo tipo de json
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(8000, () => {

    console.log('server started at port 8000')
})