const mongoose = require("mongoose");
const userSchema = require("./schema");

const User = mongoose.model("user", userSchema)

module.exports = User