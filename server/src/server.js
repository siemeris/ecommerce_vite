const app = require('./app')

const connectDB = require('./utils/database.js')


/*
@param {},

return {}
*/
const startServer = () => { 
  app.listen(3232, () => {
    connectDB()
    console.log('Server is running on port 3232')
  })
}

startServer()
