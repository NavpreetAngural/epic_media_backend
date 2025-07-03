const router = require("express").Router();
const multer = require("multer");

const add = require("../../controllers/Category/add");
const typewise = require("../../controllers/Category/typewise");
const viewall = require("../../controllers/Category/viewall");

// Set up multer storage
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

// Optional: filter to accept only images or videos
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi|webm/;
  const ext = file.originalname.split(".").pop().toLowerCase();

  if (allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type. Only image and video files are allowed."));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 100 * 1024 * 1024 }, // up to 100MB
});

router.post("/add", upload.single("media"), add);
router.get("/view", viewall);
router.get("/type/:cName", typewise);

module.exports = router;
