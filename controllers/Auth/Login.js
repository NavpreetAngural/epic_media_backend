const User = require("../../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res.status(404).json({
        msg: "Invalid Email ",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, existUser.password);
    if (!isMatch) {
      return res.status(403).json({
        msg: "Invalid password",
        success: false,
      });
    }

    const token = jwt.sign(
      { id: existUser._id, email },
      process.env.SECRET_KEY, // Corrected from 'SECREt_KEY' to 'SECRET_KEY'
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      msg: `${email} logged in successfully`,
      token,
      data: existUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error", success: false });
  }
};

module.exports = Login;
