const { oauth2Client } = require("../../utils/googleClient");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const User = require("../../models/User.model");
const jwt = require("jsonwebtoken");
const registerEmail = require("./registerNodemailer");
require("dotenv").config();

// ✅ Download and Save Google Profile Picture
const downloadDp = async (url, email) => {
  const fileName = `${Date.now()}_${email.split('@')[0]}.jpg`;
  const imagePath = path.join(__dirname, "../../uploads", fileName);

  const writer = fs.createWriteStream(imagePath);
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", () => resolve(fileName));
    writer.on("error", reject);
  });
};

// ✅ Main Google Login Handler
const googleLogin = async (req, res) => {
  try {
    const { code } = req.body; // 👈 now reading from body
    if (!code) {
      return res.status(400).json({ msg: "Authorization code missing" });
    }

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const googleRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );

    const { email, name, picture } = googleRes.data;

    let user = await User.findOne({ email });

    if (!user) {
      const savedFilename = await downloadDp(picture, email);

      user = new User({
        email,
        fullName: name,
        dp: savedFilename,
      });
      await user.save();

      try {
                await registerEmail(email, name)
            }
            catch (emailerror) {
                console.error("email sending failed", emailerror)
            }
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
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
