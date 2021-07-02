const express = require("express");
const router = express.Router();

router.use("/api/products", require("./productRoutes"))


module.exports = router