const router = require("express").Router()

const viewSingle = require("../../controllers/Bookings/viewsingle")
const authMiddleware = require("../../middleware/authMiddleware")
const add = require("../../controllers/Bookings/add")
const del = require("../../controllers/Bookings/delete")
const update = require("../../controllers/Bookings/update")
const viewAll = require("../../controllers/Bookings/viewAll")


router.get("/view/:email" , viewSingle)
router.post("/add" , add )
router.delete("/delete/:id" , del)
router.put("/update/:id" , update)
router.get("/viewall" , viewAll)

module.exports = router