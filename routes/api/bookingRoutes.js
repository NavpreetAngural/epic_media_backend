const router = require("express").Router()

const view = require("../../controllers/Bookings/view")
const authMiddleware = require("../../middleware/authMiddleware")
const add = require("../../controllers/Bookings/add")
const del = require("../../controllers/Bookings/delete")
const update = require("../../controllers/Bookings/update")

router.get("/view/:email" , view)
router.post("/add" , add )
router.delete("/delete/:id" , del)
router.put("/update/:id" , update)

module.exports = router