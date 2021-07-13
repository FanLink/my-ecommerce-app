const express = require("express");
const router = express.Router();
const isAuthen = require("../middleware/is-auth")

router.use("/api/products", require("./productRoutes"))
router.use("/api/users",isAuthen, require("./userRoutes"))
router.use("/api/auth", require("./authRoutes"))

module.exports = router