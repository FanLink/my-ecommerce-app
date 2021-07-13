const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

});

module.exports =  userSchema;