const router = require("express").Router()

const add = require("../../controllers/Contact/add")

router.post("/add", add)

module.exports = router