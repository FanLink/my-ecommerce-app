const express = require("express");
const { asyncHandler } = require("../../util");
const router = express.Router();
const handler = require("./handler")

router.get("/", asyncHandler(async(req,res,_)=>{
    const result = await handler.get(req);
    res.send(result)
}))


// login
router.post("/login", asyncHandler(async(req,res,_)=>{
  const result = await handler.userLogin(req,res );
  res.send(result)
}));

// Register
router.post("/register", asyncHandler(async(req,res,_)=>{
  const result = await handler.userRegister(req,res );
  res.send(result)
}));
module.exports = router