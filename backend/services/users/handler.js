const User = require("./model");
const getUserById = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if(!user) return res.status(400).json({error: "User Not Exist"})
    return {
      userName: user.userName,
      userEmail: user.userEmail
    }
  } catch (error) {
    throw error
  }
}


module.exports = {
  getUserById
}