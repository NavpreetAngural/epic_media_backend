const jwt = require("jsonwebtoken")
require("dotenv").config()
const middleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next ()
    }
    catch (err) {
        return res.status(401).json({
            message: "invalid Token"
        })
    }
}

module.exports = middleware