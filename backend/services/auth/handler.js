const bcrypt = require("bcryptjs");
const User = require("../users/model");
const ErrorResponse = require("../../util/errorResponse");

// register user
const userRegister = async (req, res, next) => {
  const {
    userName,
    userEmail,
    password
  } = req.body;

  try {
    let user = await User.findOne({
      userEmail
    })

    if (user) {
      return next(new ErrorResponse("User already exists", 400))
    }

    const hashedPsw = await bcrypt.hash(password, 12);

    user = await User.create({
      userName,
      userEmail,
      password: hashedPsw,
    });

    sendToken(user, 200, res) // reduce duplicate functions above
  } catch (error) {
    next(error)
  }
}

// Login User
const userLogin = async (req, res, next) => {
  const {
    userEmail,
    password
  } = req.body;
  if (!userEmail || !password) {
    return next(new ErrorResponse("please provide email and password", 400))
  }

  try {
    const user = await User.findOne({
      userEmail
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 404))
    }

    // check that password match
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials", 404))
    }

    // const payload = {
    //   user: {
    //     _id: user._id,
    //   },
    // };

    // const token = jwt.sign(payload, config.get("JWT_SECRET"), {
    //   expiresIn: "1d",
    // });

    // res.status(200).json({ token });
    sendToken(user, 200, res) // reduce duplicate functions above

  } catch (error) {
    next(error)
  }
}
const forgotPassword = async (req, res) => {
  // Send Email to email provided but first check if user exists
  const {
    userEmail
  } = req.body;
  try {
    const user = await User.findOne({
      userEmail
    });
    if (!user) return next(new ErrorResponse("No Email could not be sent", 404))
    const resetToken = user.getResetPasswordToken();
    await user.save();
    // create reset url to email to provided
    const resetUrl = `http://localhost:3000//passwordreset/${resetToken}`;

    //html Messae
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;
    try {
      await sendEmail({
        to: user.userEmail,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({
        success: true,
        data: "Email Sent"
      });
    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error)
  }
}

const resetPassword = async (req, res) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
  .createHash("sha256")
  .update(req.params.resetToken)
  .digest("hex");

try {
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorResponse("Invalid Token", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(201).json({
    success: true,
    data: "Password Updated Success",
    token: user.getSignedJwtToken(),
  });
} catch (err) {
  next(err);
}
}
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({
    token
  })
}
module.exports = {
  userRegister,
  userLogin,
  forgotPassword,
  resetPassword

}