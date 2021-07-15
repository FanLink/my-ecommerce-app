const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: [true, "Please Provide a email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ]
  },
  userName: {
    type: String,
    required: [true, "Please provide user name"]
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    // select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
});

module.exports =  userSchema;