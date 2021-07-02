const Product = require("./model")

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return products
  } catch (error) {
    throw error
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return product
  } catch (error) {
    console.error(error);
    throw error
  }
}


module.exports = {
  getAllProducts,
  getProductById
}