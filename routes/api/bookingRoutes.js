const router = require("express").Router()

const view = require("../../controllers/Bookings/view")
const authMiddleware = require("../../middleware/authMiddleware")
const add = require("../../controllers/Bookings/add")
const del = require("../../controllers/Bookings/delete")

router.get("/view/:email" , view)
router.post("/add" , add )
router.delete("/delete/:id" , del)

module.exports = router