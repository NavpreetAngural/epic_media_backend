const { oauth2Client } = require("../../utils/googleClient");
const axios = require("axios");
const User = require("../../models/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const googleLogin = async (req, res) => {
  try {
    const code = req.query.code;

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const googleRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );

    const { email, name, picture } = googleRes.data;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        fullName: name,
        dp: picture,
      });
      await user.save();
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "7d" } // optional: add expiration
    );

    return res.status(200).json({
      msg: "Login via Google Successfully",
      success: true,
      data: user,
      token,
    });
  } catch (err) {
    console.error("Google login error:", err.message);
    return res.status(401).json({
      msg: "Google login failed",
      error: err.message,
    });
  }
};

module.exports = googleLogin;
