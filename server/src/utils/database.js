const mongoose = require('mongoose');

require('dotenv').config();

// connect database
const connectDB = async () => {
  try {

    const conn = await mongoose.connect(process.env.DB_MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    
  } catch (error) {
    console.log(error);
  }
}


module.exports = connectDB;
