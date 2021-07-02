require("dotenv").config()
const express = require('express');
const connectDB = require("./config/db");

connectDB()

const app = express();
app.use(express.json())

app.use("/", require("./routes"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`)
})