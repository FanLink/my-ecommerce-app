const jwt = require("jsonwebtoken")
const config = require("config")
module.exports = (req, res, next) => {
  const authenHeader = req.header("Authorization");
  if(!authenHeader){
    return res.status(401).json({error: "Unauthorized, Access Denined"})
  }
  try {
    const decodedToken = jwt.verify(authenHeader, config.get("JWT_SECRET"));
    req.userId = decodedToken.id
    next()
  } catch (error) {
    res.status(401).json({error: "Unauthorized, Access Denined"})
  }
}