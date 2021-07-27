const Product = require("./model")

const getAllProducts = async (req, res) => {
  try {
    let query =  Product.find();
    const page= parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 8;
    const skip = (page -1)*pageSize;
    const total = await Product.countDocuments();
    
    const pages = Math.ceil(total/pageSize);

    query = query.skip(skip).limit(pageSize);
    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }
    const products = await query
    return {
      count: products.length,
      page,
      pages,
      products
    }
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