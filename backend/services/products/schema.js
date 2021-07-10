const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  release: {
    type: String,
    required: true
  },
  reviews: {
    type: String,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  systemReq: {
    type: Array,
    required: true
  },
  genres: {
    type: Array,
    required: true
  },
  aboutUrl: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  }
});
module.exports = productSchema;