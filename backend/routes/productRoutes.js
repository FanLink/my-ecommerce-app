const express = require("express");

const router = express.Router();

router.use("/", require("../services/products/controller"))

module.exports = router;
