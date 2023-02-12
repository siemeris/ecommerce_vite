const mongoose = require('mongoose');

require('dotenv').config();

// connect database
const connectDB = async() => {

  mongoose.set('strictQuery', false)

  const conn = await mongoose.connect(process.env.DB_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false

  }).then(() => {})
    .catch(err => console.log('ERRRO EN LA BASE DE DATOS >>>>> ', err));
}


module.exports = connectDB;
