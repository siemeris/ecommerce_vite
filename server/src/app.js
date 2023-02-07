const express  = require('express')

const app = express()


// configuracion para la aceptacion de res JSON

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// endpoints
// .....

module.exports = app