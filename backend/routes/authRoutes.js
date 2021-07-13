const express = require("express");
const router = express.Router();

router.use("/", require("../services/auth/controller"))

module.exports = router;