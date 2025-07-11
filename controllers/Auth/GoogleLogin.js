const { oauth2Client } = require("../../utils/googleClient");
const axios = require("axios");
const User = require("../../models/User.model");
const jwt = require("jsonwebtoken");
const registerEmail = require("./registerNodemailer");
const cloudinary = require("../../utils/cloudinary");
require("dotenv").config();

// ⬆️ Upload Google Profile Picture to Cloudinary
const uploadDpToCloudinary = async (imageUrl, email) => {
  const publicId = `google_dps/${Date.now()}_${email.split("@")[0]}`;

  const result = await cloudinary.uploader.upload(imageUrl, {
    public_id: publicId,
    folder: "google_dps",
    resource_type: "image",
  });

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
};

// ⬆️ Main Google OAuth Login Controller
const googleLogin = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ msg: "Authorization code missing" });
    }

    // Get Google tokens using auth code
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Fetch user info from Google
    const googleRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
    );

    const { email, name, picture } = googleRes.data;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Upload Google DP to Cloudinary
      const uploadedDp = await uploadDpToCloudinary(picture, email);

      // Create new user
      user = new User({
        email,
        fullName: name,
        dp: uploadedDp.public_id,
        url: uploadedDp.url,
      });

      await user.save();

      // Send welcome email
      try {
        await registerEmail(email, name);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
    }

    // Create JWT Token
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      msg: "Login via Google successful",
      success: true,
      data: user,
      token,
    });
  } catch (err) {
    console.error("Google login error:", err.message);
    return res.status(500).json({
      msg: "Google login failed",
      success: false,
      error: err.message,
    });
  }
};

module.exports = googleLogin;
