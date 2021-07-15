require("dotenv").config()
const express = require('express');
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

connectDB()

const app = express();
app.use(express.json())

app.use("/", require("./routes"))
//Error Handler (Should be last piece of Middleware)
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`)
})