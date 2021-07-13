require("dotenv").config();
const mongoose = require("mongoose");
// const config = require("config")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false
    });  
    console.log("MongoDB connection SUCCESS")
  } catch (error) {
    console.log(error)
    console.error("MongoDB connection FAIL")
    process.exit(1)
  }
};


module.exports = connectDB