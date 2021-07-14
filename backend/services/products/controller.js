const express = require("express")
const router = express.Router();
const handler = require("./handler")
const {asyncHandler} = require("../../util")

//@desc GET all  products from db
//@route GET /api/products
//@access Public
router.get("/", asyncHandler(async (req, res, _) => {
  const result = await handler.getAllProducts(req)
  res.send(result)
}))


//@route GET /api/products/game
router.get('/search', asyncHandler(async (req, res, _) => {
  const result = await handler.searchProducts(req,res)
  res.send(result)
}))

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public

router.get('/:id', asyncHandler(async (req, res, _) => {
  const result = await handler.getProductById(req)
  res.send(result)
}))

module.exports = router
