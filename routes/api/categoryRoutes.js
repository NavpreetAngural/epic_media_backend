const router = require("express").Router()
const multer = require("multer")

const add = require("../../controllers/Category/add")
const typewise = require("../../controllers/Category/typewise")
const viewall = require("../../controllers/Category/viewall")

const storage = multer.diskStorage({
    destination : "uploads",
    filename:(req,file , cb) => {
        return cb(null , `${Date.now()}${file.originalname}`)
    }
})

const upload =  multer({storage : storage}) 

router.post("/add" , upload.single("cImage") , add )
router.get("/view" , viewall )
router.get("/type/:cName" , typewise)

module.exports = router