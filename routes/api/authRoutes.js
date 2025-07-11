const router = require("express").Router()

const signup = require("../../controllers/Auth/Register")
const googleLogin = require("../../controllers/Auth/GoogleLogin")
const Login = require("../../controllers/Auth/Login")
const viewAll = require("../../controllers/Auth/viewall")
const deleteUser = require("../../controllers/Auth/delete")
const updateUser = require("../../controllers/Auth/update")
const {upload} = require("../../middleware/cloudinaryUpload")


router.post("/register", upload.single('dp'), signup)
router.post("/google", upload.single('dp'), googleLogin)
router.post("/login" , Login)
router.get("/viewall", viewAll)
router.delete("/delete/:id", deleteUser)
router.put("/update/:id", updateUser)

module.exports = router

