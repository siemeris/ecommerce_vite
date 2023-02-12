const express  = require('express')

// routers user
const { userRouter } = require('./routers/user.router')

const app = express()


// configuracion para la aceptacion de res JSON

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// endpoints
// .....
app.use('/api/v1/users', userRouter)

module.exports = app