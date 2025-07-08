const router = require("express").Router()

const add = require("../../controllers/Contact/add")
const viewall = require("../../controllers/Contact/viewAll")
const deleteContact = require("../../controllers/Contact/delete")

router.post("/add", add)
router.get("/viewall", viewall)
router.delete("/delete/:id", deleteContact)

module.exports = router