// Dependencias
const express = require("express")
// Rutas
const userRouter = require('./users/users.router').router
const app = express()

// para poder usar el body y todo tipo de json
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})

app.use('/api/v1/users', userRouter)

app.listen(8000, () => {

    console.log('server started at port 8000')
})