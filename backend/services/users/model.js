const jwt = require("jsonwebtoken");
const config = require("config")
const mongoose = require("mongoose");
const UserSchema = require("./schema");
const crypto = require("crypto");

UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({id: this._id}, config.get("JWT_SECRET"), {expiresIn: "1d"});
}

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};

const User = mongoose.model("user", UserSchema)

module.exports = User