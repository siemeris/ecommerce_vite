const app = require('./app')



/*
@param {},

return {}
*/
const startServer = () => { 
  app.listen(3232, () => {
    console.log('Server is running on port 3232')
  })
}

startServer()
