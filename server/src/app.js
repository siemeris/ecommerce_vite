const express  = require('express')

// routers user
const { userRouter } = require('./routers/user.router')

// globalError
const globalError = require('./utils/globalError')

const app = express()


// configuracion para la aceptacion de res JSON

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// endpoints
// .....
app.use('/api/v1/users', userRouter)
app.use(globalError)
module.exports = app