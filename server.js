const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require("./routes/index")
require("dotenv").config()
const port = process.env.PORT
const mongodb = process.env.MONGO_URL

app.use(express.json());

app.use(cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],

}))

app.use(routes)

mongoose.connect(mongodb).then(() => {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.log("Error While Database Connecting");
})

app.get("/", (req, res, next) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("server started at port", port);

})