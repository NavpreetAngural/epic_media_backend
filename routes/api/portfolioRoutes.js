const router = require("express").Router();
const multer = require("multer");
const add = require("../../controllers/Portfolio/add");
const view = require("../../controllers/Portfolio/view");
const deletePortfolio = require("../../controllers/Portfolio/delete");
const updatePortfolio = require("../../controllers/Portfolio/update");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/add", upload.single("image"), add);
router.get("/view", view);
router.delete("/delete/:id", deletePortfolio);
router.put("/update/:id",upload.single("image"), updatePortfolio);

module.exports = router;
