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
const searchProducts = async (req, res) => {
  const searchTerm =  req.query.filters
  try {
    const products = await Product.find({name: {"$regex": searchTerm}})
    return products
  } catch (error) {
    console.error(error);
    throw error
  }
}


module.exports = {
  getAllProducts,
  getProductById,
  searchProducts
}