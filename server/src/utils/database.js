const mongoose = require('mongoose');

// connect database
const connectDB = async () => {
  try {

    const conn = await mongoose.connect('mongodb+srv://root:root@cluster0.flxoxrp.mongodb.net/test', {
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
