const mongoose = require('mongoose');

require('dotenv').config();

// connect database
const connectDB = async () => {
  try {

    const conn = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}}:${process.env.DB_PASSWORD}@cluster0.flxoxrp.mongodb.net/test`, {
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
