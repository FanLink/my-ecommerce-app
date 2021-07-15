const express = require("express");
const { asyncHandler } = require("../../util");
const router = express.Router();
const handler = require("./handler")


// login
router.post("/login", handler.userLogin)

// Register
router.post("/register",handler.userRegister);

// forgotPassword
router.post("/forgotPassword",handler.forgotPassword);

//resetPassword
router.put("/resetPassword",handler.resetPassword);

module.exports = router