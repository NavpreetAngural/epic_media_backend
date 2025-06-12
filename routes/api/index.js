const router = require("express").Router()

const authRoutes = require("../../routes/api/authRoutes")

router.use("/auth" ,authRoutes)

module.exports = router