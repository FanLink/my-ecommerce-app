const express = require("express")
const router = express.Router()

router.use("/", require("../services/users/controller"))

module.exports = router;