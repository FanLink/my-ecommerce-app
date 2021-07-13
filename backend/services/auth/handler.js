const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../users/model")

const get = async(req,res) => {
  const result = "hahaha"
  return result
}
const userRegister = async (req, res) => {
  const { userName, userEmail, password } = req.body;

  try {
    let user = await User.findOne({ userEmail });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPsw = await bcrypt.hash(password, 12);

    user = new User({
      userName,
      userEmail,
      password: hashedPsw,
    });

    const newUser = await user.save();

    const payload = {
      user: {
        _id: newUser._id,
      },
    };

    const token = jwt.sign(payload, config.get("JWT_SECRET"), {
      expiresIn: "1d",
    });

    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
}
const userLogin = async (req, res) => {
  const { userEmail, password } = req.body;

  try {
    const user = await User.findOne({ userEmail });

    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ erorr: "Invalid Credentials" });
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };

    const token = jwt.sign(payload, config.get("JWT_SECRET"), {
      expiresIn: "1d",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
}
module.exports = {
  get,
  userRegister,
  userLogin
}