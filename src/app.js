// Dependencias
const express = require("express")

const app = express()

// para poder usar el body y todo tipo de json
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})


app.listen(8000, () => {

    console.log('server started at port 8000')
})