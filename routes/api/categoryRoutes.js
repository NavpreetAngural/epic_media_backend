const router = require("express").Router();

const add = require("../../controllers/Category/add");
const typewise = require("../../controllers/Category/typewise");
const viewall = require("../../controllers/Category/viewall");
const deleteCategory = require("../../controllers/Category/delete")
const update = require("../../controllers/Category/update");
const upload = require("../../middleware/cloudinaryUpload");

router.post("/add", upload.single("media"), add);
router.get("/view", viewall);
router.get("/type/:cName", typewise);
router.delete("/delete/:id" , deleteCategory)
router.put("/update/:id", upload.single("media"), update);

module.exports = router;
