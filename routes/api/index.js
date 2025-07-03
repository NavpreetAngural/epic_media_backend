const router = require("express").Router()

const authRoutes = require("../../routes/api/authRoutes")
const bookingRoutes = require("../../routes/api/bookingRoutes")
const categoryRoutes = require("../../routes/api/categoryRoutes")
const storyRoutes = require("../../routes/api/storyRoutes")
const portfolioRoutes = require("../../routes/api/portfolioRoutes")

router.use("/auth", authRoutes)
router.use("/booking", bookingRoutes)
router.use("/category" , categoryRoutes)
router.use("/story" , storyRoutes)
router.use("/portfolio", portfolioRoutes)


module.exports = router