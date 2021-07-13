const express = require("express");
const {
  asyncHandler
} = require("../../util");
const router = express.Router();
const handler = require("./handler")
router.get("/", asyncHandler(async (req, res, _) => {
  const result = await handler.getUserById(req, res)
  res.send(result)
}))



module.exports = router;