const router = require("express").Router()
const multer = require("multer")

const signup = require("../../controllers/Auth/Register")
const googleLogin = require("../../controllers/Auth/GoogleLogin")
const Login = require("../../controllers/Auth/Login")

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

router.post("/register", upload.single('dp'), signup)
router.post("/google", upload.single('dp'), googleLogin)
router.post("/login" , Login)


module.exports = router