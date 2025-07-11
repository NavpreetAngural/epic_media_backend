const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../utils/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith("video/");
    return {
      folder: "epic_media", // Apna folder naam
      resource_type: isVideo ? "video" : "image", // ⬅️ Important
      allowed_formats: isVideo
        ? ["mp4", "avi", "mov"]
        : ["jpg", "png", "jpeg", "webp"],
      public_id: `${Date.now()}_${file.originalname.split('.')[0]}`,
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
